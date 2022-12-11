import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const users = [
  { username: "admin", email: "admin@kamp", password: "123123123" },
  { username: "testuser", email: "user1@kamp", password: "123123123" }
]

type User = { username: string; email: string; password: string };

const prisma = new PrismaClient();

async function seedAll(users: User[]) {
  for (const user of users) {
    const email: string =  user.email;
    const username: string = user.username;

    const hashedPassword = await bcrypt.hash(user.password, 10);

    const prismaUser = await prisma.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        username,
        email,
        password: {
          create: {
            hash: hashedPassword,
          },
        },
      },
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