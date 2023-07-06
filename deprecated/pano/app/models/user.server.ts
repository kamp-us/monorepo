import type { Password, User, UserPreference } from "@kampus-db/pano-prisma";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";

export type { User, UserPreference };

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

export async function createUser({ username, email, password }: CreateUserArgs) {
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

export async function deleteUserByEmail(id: User["id"]) {
  return prisma.user.delete({ where: { id } });
}

const verifyPassword = async (password: Password, passwordToVerify: string) => {
  return await bcrypt.compare(passwordToVerify, password.hash);
};

export async function verifyLogin(username: User["username"], password: Password["hash"]) {
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

export const updateUsername = async (user: User, username: string) => {
  return prisma.user.update({
    where: { id: user.id },
    data: {
      username,
    },
  });
};

export const updateEmail = async (user: User, email?: string) => {
  return prisma.user.update({
    where: { id: user.id },
    data: {
      email,
    },
  });
};

export const updatePassword = async (
  user: User,
  oldPassword: string | null,
  newPassword: string
) => {
  const userWithPassword = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      password: true,
    },
  });

  if (!userWithPassword) {
    return null;
  }

  const isValid =
    oldPassword && userWithPassword.password
      ? await verifyPassword(userWithPassword.password, oldPassword)
      : true;

  if (!isValid) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  return prisma.password.upsert({
    where: { userID: userWithPassword.id },
    update: {
      hash: hashedPassword,
    },
    create: {
      hash: hashedPassword,
      user: {
        connect: {
          id: userWithPassword.id,
        },
      },
    },
  });
};

interface Entity {
  owner: User;
}

export const isOwner = <T extends Entity>(user: User | null, entity?: T | null): entity is T => {
  return !!user && !!entity && entity.owner.id === user.id;
};

export async function updateTheme(user: User, theme: UserPreference["theme"]) {
  await prisma.userPreference.update({
    where: { userID: user.id },
    data: { theme },
  });
}

export async function getTheme(id?: User["id"]) {
  if (!id) return "DARK";

  const userPreference = await prisma.userPreference.findUnique({
    where: { userID: id },
  });

  return userPreference?.theme ?? "DARK";
}

export const hasPassword = async (id: User["id"]) => {
  const password = await prisma.password.findUnique({
    where: { userID: id },
  });

  return !!password;
};
