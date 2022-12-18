import { PrismaClient } from "@prisma/client";
import invariant from "tiny-invariant";

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
// in production we'll have a single connection to the DB.
if (process.env.NODE_ENV === "production") {
  prisma = getClient();
} else {
  if (!global.__db__) {
    global.__db__ = getClient();
  }
  prisma = global.__db__;
}

function getClient() {
  const { DATABASE_URL, NODE_ENV } = process.env;
  invariant(typeof DATABASE_URL === "string", "DATABASE_URL env var not set");

  const databaseUrl = new URL(DATABASE_URL);

  console.log(`🔌 setting up prisma client to ${databaseUrl.host}`);
  // NOTE: during development if you change anything in this function, remember
  // that this only runs once per server restart and won't automatically be
  // re-run per request like everything else is. So if you need to change
  // something in this file, you'll need to manually restart the server.
  const client = new PrismaClient({
    log: NODE_ENV === "development" ? ["query", "info", "warn", "error"] : [],
    datasources: {
      db: {
        url: databaseUrl.toString(),
      },
    },
  });

  client.$use(async (params, next) => {
    if (params.model === "Comment") {
      if (params.action == "delete") {
        // Delete queries
        // Change action to an update
        params.action = "update";
        params.args["data"] = { deletedAt: new Date() };
      }
      if (params.action == "deleteMany") {
        if (!params.args) {
          params.args = {};
        }
        // Delete many queries
        params.action = "updateMany";
        if (params.args.data != undefined) {
          params.args.data["deletedAt"] = new Date();
        } else {
          params.args["data"] = { deletedAt: new Date() };
        }
      }
    }
    return next(params);
  });

  // connect eagerly
  client.$connect();

  return client;
}

export { prisma };
