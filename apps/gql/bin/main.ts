import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { Resolvers } from "../src/schema/types.generated";
import { join } from "node:path";
import { NodeHttpRPC } from "twirp-ts";
import { env } from "../env";
import { GetBatchUsersRequest, UsersClientProtobuf } from "@kampus-protos/users";
import DataLoader from "dataloader";

const typeDefs = readFileSync(join(__dirname, "../src/schema/schema.graphql"), "utf8").toString();

const clients = {
  users: new UsersClientProtobuf(NodeHttpRPC({ baseUrl: env.USERS_TWIRP_HOST })),
};

type UserLoaderKeyIdentifier = "id" | "username" | "email";

type UserLoaderKey = `${UserLoaderKeyIdentifier}_${string}`;

const loaders = {
  users: new DataLoader(async (keys: readonly UserLoaderKey[]) => {
    const request: GetBatchUsersRequest = {
      ids: [],
      usernames: [],
      emails: [],
    };

    keys.forEach((key) => {
      const [identifier, value] = key.split("_") as [UserLoaderKeyIdentifier, string];
      if (identifier === "id") {
        request.ids.push(value);
      } else if (identifier === "username") {
        request.usernames.push(value);
      }
    });

    const response = await clients.users.GetBatchUsers(request);

    const users = response.users || [];

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  }),
};

const resolvers: Resolvers<{ loaders: typeof loaders }> = {
  Query: {
    user: async (_, { input }, context) => {
      if (!input) {
        throw new Error("input is required");
      }

      if (!input.id && !input.username) {
        throw new Error("id or username is required");
      }

      return context.loaders.users.load(input.id ? `id_${input.id}` : `username_${input.username}`);
    },
  },

  User: {
    id: (user) => user.id,
    username: (user) => user.username,
  },
};

function main() {
  const app = express();

  const yoga = createYoga({
    schema: createSchema({ typeDefs, resolvers }),
    logging: "debug",
    graphiql: true,
    context: async () => ({
      loaders,
    }),
  });

  app.use("/graphql", yoga);
  app.listen(env.PORT, () => {
    console.info(`Server is running on http://localhost:${env.PORT}/graphql`);
  });
}

main();
