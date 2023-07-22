import { type Clients } from "~/clients";
import { createSozlukLoaders } from "./sozluk";
import { createUsersLoader } from "./user";

export type DataLoaders = ReturnType<typeof createLoaders>;

export const createLoaders = (clients: Clients) => {
  return {
    user: createUsersLoader(clients),
    sozluk: createSozlukLoaders(clients),
  };
};
