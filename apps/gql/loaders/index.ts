import { type Clients } from "~/clients";
import { createSozlukLoaders } from "./sozluk";
import { type DataLoaders } from "./types";
import { createUsersLoader } from "./user";

export const createLoaders = (clients: Clients): DataLoaders => {
  return {
    user: createUsersLoader(clients),
    sozluk: createSozlukLoaders(clients),
  };
};
