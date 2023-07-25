import { createPrismaLoader } from "@kampus/gql-utils";

import { type Clients } from "~/clients";
import { LoaderKey } from "./utils/loader-key";

export class UserLoaderKey extends LoaderKey<"id" | "username", string> {}

export function createUserLoaders(clients: Clients) {
  const byID = createPrismaLoader(clients.prisma.user, "id", (users) => {
    users.forEach((user) => {
      if (user.username) {
        byUsername.prime(user.username, user);
      }
    });
  });

  const byUsername = createPrismaLoader(clients.prisma.user, "username", (users) => {
    users.forEach((user) => {
      byUsername.prime(user.id, user);
    });
  });

  return {
    byID,
    byUsername,
  };
}
