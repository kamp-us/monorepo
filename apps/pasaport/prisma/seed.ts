import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const users = [
  { username: "admin", email: "admin@kamp.us", password: "123123" },
  { username: "testuser", email: "user1a@kamp.us", password: "123123123" },
  { username: "berke", email: "andyanday33@gmail.com", password: "123123" },
  { username: "anday", email: "nzl33_anday@hotmail.com", password: "123123" },
];

type User = { username: string; email: string; password: string };
const prisma = new PrismaClient();

async function seedAll(users: User[]) {
  for (const user of users) {
    const email: string = user.email;
    const username: string = user.username;

    const hashedPassword = await bcrypt.hash(user.password, 10);

    await prisma.user.upsert({
      where: {
        username,
      },
      update: {
        username,
        email,
        password: {
          update: {
            hash: hashedPassword,
          },
        },
      },
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
