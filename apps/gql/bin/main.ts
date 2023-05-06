import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { env } from "../env";
import type { Resolvers } from "../src/schema";
import { createUsersLoader, UsersLoader } from "../src/loaders";
import { createTwirpClients, TwirpClients } from "../src/clients";

const typeDefs = readFileSync(join(__dirname, "../src/schema/schema.graphql"), "utf8").toString();

type DataLoaders = {
  users: UsersLoader;
};

const createLoaders = (clients: TwirpClients): DataLoaders => {
  return {
    users: createUsersLoader(clients),
  };
};

const resolvers: Resolvers<{ loaders: DataLoaders }> = {
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
  const twirpClients = createTwirpClients();

  const yoga = createYoga({
    schema: createSchema({ typeDefs, resolvers }),
    logging: "debug",
    graphiql: true,
    context: async () => ({
      loaders: createLoaders(twirpClients),
    }),
  });

  app.use("/graphql", yoga);
  app.listen(env.PORT, () => {
    console.info(`Server is running on http://localhost:${env.PORT}/graphql`);
  });
}

main();
