import { PrismaClient, User } from "@prisma/client";
import { TwirpContext } from "twirp-ts";
import {
  CreateUserRequest,
  GetBatchUsersRequest,
  GetUserRequest,
  createUsersServer,
} from "@kampus-protos/users";

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

const GetUser = async (ctx: UsersTwirpContext, request: GetUserRequest) => {
  let user: User | null = null;

  if (request.identifier.oneofKind === "id") {
    user = await ctx.prisma.user.findUnique({
      where: { id: request.identifier.id },
    });
  } else if (request.identifier.oneofKind === "username") {
    user = await ctx.prisma.user.findUnique({
      where: { username: request.identifier.username },
    });
  } else if (request.identifier.oneofKind === "email") {
    user = await ctx.prisma.user.findUnique({
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

const GetBatchUsers = async (ctx: UsersTwirpContext, request: GetBatchUsersRequest) => {
  const users = await ctx.prisma.user.findMany({
    where: {
      OR: [
        { id: { in: request.ids } },
        { username: { in: request.usernames } },
        { email: { in: request.emails } },
      ],
      deletedAt: null,
    },
  });

  return {
    users: users.map(toProtoUser),
  };
};

const CreateUser = async (ctx: UsersTwirpContext, { username, email }: CreateUserRequest) => {
  const user = await ctx.prisma.user.upsert({
    where: { username },
    update: { username, email },
    create: { username, email },
  });

  return { user: toProtoUser(user) };
};

interface UsersTwirpContext extends TwirpContext {
  prisma: PrismaClient;
}

export const createServer = ({ prisma }: { prisma: PrismaClient }) => {
  const server = createUsersServer<UsersTwirpContext>({
    GetUser,
    GetBatchUsers,
    CreateUser,
  });

  server.use(async (ctx, req, next) => {
    console.log("attaching prisma client to context");
    ctx.prisma = prisma;
    const response = await next(ctx, req);
    console.log("assigned prisma to context: ", !!ctx.prisma);
    return response;
  });

  return server;
};
