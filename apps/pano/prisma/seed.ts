import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function seed() {
  const email = "admin@kamp.us";
  const username = "admin";

  const hashedPassword = await bcrypt.hash("123123123", 10);

  const user = await prisma.user.upsert({
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

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
