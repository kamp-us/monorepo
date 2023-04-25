import express from "express";
import { createUsersServer } from "@kampus-protos/users/service.twirp";
import { env } from "./env";
import { prisma } from "./prisma/client";
import { User } from "@prisma/client";
import { TwirpContext } from "twirp-ts";
import { GetBatchUsersRequest, GetUserRequest } from "@kampus-protos/users/service";

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

  const user = await prisma.user.findUnique({
    where: { id: request.id },
  });

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
      id: { in: request.ids },
      deletedAt: null,
    },
  });

  return {
    users: users.map(toProtoUser),
  };
};

const server = createUsersServer({
  GetUser,
  GetBatchUsers,
});

const app = express();

console.log("twirp server is gonna be routed to: ", server.matchingPath());

app.post(server.matchingPath(), server.httpHandler());

app.listen(env.PORT, () => {
  console.log(`server is running at ${env.PORT}`);
});
