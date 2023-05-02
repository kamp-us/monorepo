import express from "express";
import { createSchema, createYoga } from "graphql-yoga";
import { readFileSync } from "node:fs";
import { Resolvers } from "../src/schema/types.generated";
import { join } from "node:path";

const typeDefs = readFileSync(join(__dirname, "../src/schema/schema.graphql"), "utf8").toString();

const resolvers: Resolvers = {
  Query: {
    user: (_, { input }) => {
      return {
        id: input.id ?? "1",
        username: input.username ?? "test",
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
