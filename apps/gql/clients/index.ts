import { createPrismaClient } from "./prisma";
import { type Clients } from "./types";

export const createClients = (): Clients => {
  return {
    prisma: createPrismaClient(),
  };
};
