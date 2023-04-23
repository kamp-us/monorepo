import { Password, User } from "@prisma/client";
import { prisma } from "~/db.server";
import bcrypt from "bcryptjs";

export async function getUserById(id: User["id"]) {
  return prisma.user.findUnique({ where: { id } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

type CreateUserArgs = {
  email: User["email"];
  password: string;
  username: User["username"];
};

export async function createUser({
  username,
  email,
  password,
}: CreateUserArgs) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
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

const verifyPassword = async (password: Password, passwordToVerify: string) => {
  return await bcrypt.compare(passwordToVerify, password.hash);
};

export async function verifyLogin(
  username: User["username"],
  password: Password["hash"]
) {
  const userWithPassword = await prisma.user.findUnique({
    where: { username },
    include: {
      password: true,
    },
  });

  if (!userWithPassword || !userWithPassword.password) {
    return null;
  }

  const isValid = await verifyPassword(userWithPassword.password, password);

  if (!isValid) {
    return null;
  }

  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return userWithoutPassword;
}
