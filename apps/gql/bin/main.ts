import { UsersClientProtobuf } from "@kampus-protos/users/service.twirp";
import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { Resolvers } from "../src/schema/types.generated";
import { join } from "node:path";
import { NodeHttpRPC } from "twirp-ts";
import { GetUserResponse } from "@kampus-protos/users/service";
import { env } from "../env";

const typeDefs = readFileSync(join(__dirname, "../src/schema/schema.graphql"), "utf8").toString();

const clients = {
  users: new UsersClientProtobuf(
    NodeHttpRPC({
      baseUrl: env.USERS_TWIRP_HOST,
    })
  ),
};

const resolvers: Resolvers = {
  Query: {
    user: async (_, { input }) => {
      if (!input) {
        throw new Error("input is required");
      }

      if (!input.id && !input.username) {
        throw new Error("id or username is required");
      }

      let response: GetUserResponse;
      if (input.id) {
        response = await clients.users.GetUser({
          identifier: { oneofKind: "id", id: input.id },
        });
      } else if (input.username) {
        response = await clients.users.GetUser({
          identifier: { oneofKind: "username", username: input.username },
        });
      } else {
        return null;
      }

      if (!response.user) {
        return null;
      }

      return {
        id: response.user.id,
        username: response.user.username,
      };
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
  });

  app.use("/graphql", yoga);
  app.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });
}

main();
