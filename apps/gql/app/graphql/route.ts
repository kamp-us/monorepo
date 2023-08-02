import { readFileSync } from "node:fs";
import { join } from "node:path";
import { type NextApiRequest, type NextApiResponse } from "next";
import { createSchema, createYoga } from "graphql-yoga";

import { getServerSession } from "@kampus/next-auth";

import { createClients } from "~/clients";
import { createLoaders } from "~/loaders";
import { resolvers } from "~/schema/resolvers";
import { type KampusGQLContext } from "~/schema/types";

const typeDefs = readFileSync(join(process.cwd(), "schema/schema.graphql"), "utf8").toString();
const clients = createClients();

type ServerContext = { req: NextApiRequest; res: NextApiResponse } & KampusGQLContext;

const { handleRequest } = createYoga<ServerContext>({
  schema: createSchema<ServerContext>({ typeDefs, resolvers }),
  logging: "debug",
  graphiql: true,
  context: async ({ req, res }) => {
    const loaders = createLoaders(clients);
    const session = await getServerSession(req, res);

    return {
      loaders,
      pasaport: {
        session,
      },
    } satisfies KampusGQLContext;
  },

  fetchAPI: {
    Response,
    Request,
  },
});

export { handleRequest as GET, handleRequest as POST };
