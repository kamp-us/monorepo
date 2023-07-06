import DataLoader from "dataloader";

import { type Clients } from "~/clients/types";
import { type User } from "~/schema/types.generated";
import { LoaderKey } from "./utils/loader-key";

export type UsersLoader = DataLoader<UserLoaderKey, User>;

export class UserLoaderKey extends LoaderKey<"id" | "username", string> {}

export const createUsersLoader = (clients: Clients): UsersLoader =>
  new DataLoader<UserLoaderKey, User>(async (keys) => {
    const ids: string[] = [];
    const usernames: string[] = [];

    keys.forEach((key) => {
      const { identifier, value } = key;
      if (identifier === "id") {
        ids.push(value);
      } else if (identifier === "username") {
        usernames.push(value);
      }
    });

    const users =
      (await clients.prisma.user.findMany({
        where: {
          OR: [{ id: { in: ids } }, { username: { in: usernames } }],
          deletedAt: null,
        },
      })) ?? []; // For some reason, prisma when no user found returns undefined instead of empty array.

    return keys.map((key) => {
      const dbUser = users.find((u) => u?.[key.identifier] === key.value);
      if (!dbUser) {
        return new Error(`User not found: ${key.value}`);
      }
      return {
        id: dbUser.id,
        username: dbUser.username,
      } as User;
    });
  });
