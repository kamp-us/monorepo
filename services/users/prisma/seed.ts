import { PrismaClient } from "@prisma/client";

const users = [
  { username: "admin", email: "admin@kamp.us" },
  { username: "testuser", email: "user1a@kamp.us" },
];

type User = { username: string; email: string };

const prisma = new PrismaClient();

async function seedAll(users: User[]) {
  for (const user of users) {
    const email: string = user.email;
    const username: string = user.username;

    await prisma.user.upsert({
      where: { username },
      update: { username, email },
      create: { username, email },
    });
  }
}

seedAll(users)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
