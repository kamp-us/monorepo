import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createSchema, createYoga } from "graphql-yoga";

import { createClients } from "~/clients";
import { createLoaders } from "~/loaders";
import { resolvers } from "~/schema/resolvers";

const typeDefs = readFileSync(join(process.cwd(), "schema/schema.graphql"), "utf8").toString();
const clients = createClients();

const { handleRequest } = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  logging: "debug",
  graphiql: true,
  context: () => ({
    loaders: createLoaders(clients),
  }),

  fetchAPI: {
    Response,
    Request,
  },
});

export { handleRequest as GET, handleRequest as POST };
