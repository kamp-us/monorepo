import { type Clients } from "../types";
import { mockedPrisma } from "./prisma";

export const mockedClients: Clients = {
  prisma: mockedPrisma
};