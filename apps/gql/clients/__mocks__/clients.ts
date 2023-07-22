import { type Clients } from "../";
import { mockedPrisma } from "./prisma";

export const mockedClients: Clients = {
  prisma: mockedPrisma,
};
