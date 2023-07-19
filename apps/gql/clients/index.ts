import { createPrismaClient } from "./prisma";

export type Clients = ReturnType<typeof createClients>;

export const createClients = () => {
  return {
    prisma: createPrismaClient(),
  };
};
