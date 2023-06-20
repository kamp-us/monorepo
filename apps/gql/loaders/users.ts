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

    const users = await clients.prisma.user.findMany({
      where: {
        OR: [{ id: { in: ids } }, { username: { in: usernames } }],
        deletedAt: null,
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  });
