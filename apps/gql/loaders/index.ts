import { createSozlukLoaders } from "./sozluk";
import { type DataLoaders } from "./types";
import { createUsersLoader } from "./users";
import { type Clients } from "~/clients/types";

export const createLoaders = (clients: Clients): DataLoaders => {
  return {
    users: createUsersLoader(clients),
    sozluk: createSozlukLoaders(clients),
  };
};
