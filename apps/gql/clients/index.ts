import { createPrismaClient } from "./prisma";
import { Clients } from "./types";

export const createClients = (): Clients => {
  return {
    prisma: createPrismaClient(),
  };
};
