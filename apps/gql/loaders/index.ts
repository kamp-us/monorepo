import { Clients } from "~/clients/types";
import { DataLoaders } from "./types";
import { createUsersLoader } from "./users";

export const createLoaders = (clients: Clients): DataLoaders => {
  return {
    users: createUsersLoader(clients),
  };
};
