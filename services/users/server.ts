import express from "express";
import { env } from "./env";
import { prisma } from "./prisma/client";
import { User } from "@prisma/client";
import { TwirpContext } from "twirp-ts";
import { CreateUserRequest, GetBatchUsersRequest, GetUserRequest, createUsersServer } from "@kampus-protos/users";

function dateToTimestamp(date: Date): { seconds: bigint; nanos: number } {
  const seconds = BigInt(Math.floor(date.getTime() / 1000));
  const nanos = (date.getTime() % 1000) * 1_000_000;
  return { seconds, nanos };
}

const toProtoUser = (user: User) => ({
  id: user.id,
  email: user.email,
  username: user.username,
  createdAt: dateToTimestamp(user.createdAt),
  updatedAt: dateToTimestamp(user.updatedAt),
});

const GetUser = async (ctx: TwirpContext, request: GetUserRequest) => {
  console.log({ ctx });

  let user: User | null = null;

  if (request.identifier.oneofKind === "id") {
    user = await prisma.user.findUnique({
      where: { id: request.identifier.id },
    });
  } else if (request.identifier.oneofKind === "username") {
    user = await prisma.user.findUnique({
      where: { username: request.identifier.username },
    });
  } else if (request.identifier.oneofKind === "email") {
    user = await prisma.user.findUnique({
      where: { email: request.identifier.email },
    });
  }

  if (!user) {
    throw new Error("User not found");
  }

  if (user.deletedAt) {
    throw new Error("User not found");
  }

  return {
    user: toProtoUser(user),
  };
};

const GetBatchUsers = async (ctx: TwirpContext, request: GetBatchUsersRequest) => {
  console.log({ ctx });
  const users = await prisma.user.findMany({
    where: {
      OR: [{ id: { in: request.ids } }, { username: { in: request.usernames } }, { email: { in: request.emails } }],
      deletedAt: null,
    },
  });

  return {
    users: users.map(toProtoUser),
  };
};

const CreateUser = async (ctx: TwirpContext, { username, email }: CreateUserRequest) => {
  console.log({ ctx });

  const user = await prisma.user.upsert({
    where: { username },
    update: { username, email },
    create: { username, email },
  });

  return { user: toProtoUser(user) };
};

const server = createUsersServer({
  GetUser,
  GetBatchUsers,
  CreateUser,
});

const app = express();

console.log("twirp server is gonna be routed to: ", server.matchingPath());

app.post(server.matchingPath(), server.httpHandler());

app.listen(env.PORT, () => {
  console.log(`server is running at ${env.PORT}`);
});
