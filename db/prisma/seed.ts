import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import { UniqueEnforcer } from "enforce-unique";

interface User {
  username: string;
  email: string;
}

interface Post {
  title: string;
  url?: string;
  site?: string;
  content?: string;
  comments?: Comment[];
}

interface Comment {
  content: string;
}

const unique = new UniqueEnforcer();

const fake = {
  user: (firstName = faker.person.firstName(), lastName = faker.person.lastName()): User => ({
    username: unique.enforce(() => faker.internet.userName({ firstName, lastName })),
    email: unique.enforce(() => faker.internet.email({ firstName, lastName })),
  }),
};

const users = [fake.user("admin", "kampus"), fake.user("test", "user")];

const posts = [
  {
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    site: "news.ycombinator.com",
    content: "Code",
  },
  {
    title: "Reddit",
    url: "https://reddit.com",
    site: "reddit.com",
    content: "The front page of the internet",
  },
  {
    title: "Twitter",
    url: "https://twitter.com",
    site: "twitter.com",
    content: "What's happening?",
  },
  {
    title: "Facebook",
    url: "https://facebook.com",
    site: "facebook.com",
    content: "Connect with friends, family and other people you know.",
  },
  {
    title: "Kampus Twitch",
    url: "https://twitch.tv/usirin",
    site: "twitch.tv/usirin",
    content: "Twitch",
    comments: [{ content: "Takip etmeyi unutmayın" }],
  },
  {
    title: "discord.kamp.us",
    url: "discord.kamp.us",
    site: "discord.kamp.us",
    content:
      "kampus: ortamlardaki pek $ukela yazilim toplulugu. bol pozitivite, motivasyon ve beraber gelisme mottolari. discord.kamp.us diye bir discord sunuculari var, icerisi adeta sampiyonlar ligi.",
    comments: [
      { content: "Kampüs discord sunucusu" },
      { content: "Discorda gelin" },
      {
        content: "Kampüsteki yazılımcıların motivasyonu o kadar yüksek ki, bazen hiç uyumuyorlar.",
      },
    ],
  },
  {
    title: "Github",
    url: "https://github.com/kamp-us/monorepo",
    site: "github.com/kamp-us/monorepo",
    content: "Dünyanın en iyi monoreposu",
    comments: [
      { content: "Bu monorepo çok güzel" },
      { content: "Bu monorepo inanılmaz" },
      { content: "Kampüs çoheyi" },
      { content: "!adam" },
    ],
  },
  {
    title: "Yüksek dozajlı şakalar",
    site: "kamp.us",
    content: "aynen öyle",
    comments: [
      {
        content:
          "'Yarın kampusa gidiyorum' - 'Hangi kampa?' - 'Yok ya, kampus, yazılım topluluğu oraya gidiyorum.'",
      },
      {
        content:
          "Kampüsün yazılım topluluğu üyeleri arasında bir yarışma düzenlenmiş, ama kazananın ödülü yalnızca daha fazla kod yazmak olmuş.",
      },
      {
        content:
          "'Aslında bu bir feature, bug değil' diyen yazılımcılar, kampüsün yazılım topluluğu üyeleri tarafından 'bug' olarak kabul edilir.",
      },
    ],
  },
];

const prisma = new PrismaClient();

async function seedAll(users: User[], posts: Post[]) {
  const postOwnerIDs: string[] = [];
  for (const user of users) {
    const email: string = user.email;
    const username: string = user.username;

    const prismaUser = await prisma.user.upsert({
      where: { username },
      update: { username, email },
      create: { username, email },
    });

    postOwnerIDs.push(prismaUser.id);

    await prisma.userPreference.upsert({
      where: { userID: prismaUser.id },
      update: { userID: prismaUser.id },
      create: { user: { connect: { id: prismaUser.id } } },
    });
  }

  for (const post of posts) {
    const prismaPost = await prisma.post.findFirst({
      where: { title: post.title },
      select: { id: true },
    });


    if (prismaPost) {
      continue;
    }

    await prisma.post.create({
      data: {
        ...post,
        owner: { connect: { id: randomFrom(postOwnerIDs) } },
        comments: {
          create: (post.comments ?? []).map((comment) => {
            return {
              content: comment.content,
              owner: { connect: { id: randomFrom(postOwnerIDs) } },
            };
          }),
        },
      },
    });
  }
}

const randomFrom = <T>(items: T[]) => {
  return items[Math.floor(Math.random() * items.length)];
};

seedAll(users, posts)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
