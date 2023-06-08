import DataLoader from "dataloader";
import { Clients } from "~/clients/types";
import { User } from "~/schema/types.generated";
import { LoaderKey } from "./utils/loader-key";

export type UsersLoader = DataLoader<UserLoaderKey, User>;

export class UserLoaderKey extends LoaderKey<"id" | "username", string> {}

export const createUsersLoader = (clients: Clients): UsersLoader =>
  new DataLoader<UserLoaderKey, User>(async (keys) => {
    const request: Record<string, string[]> = {
      ids: [],
      usernames: [],
    };

    keys.forEach((key) => {
      const { identifier, value } = key;
      if (identifier === "id") {
        request.ids.push(value);
      } else if (identifier === "username") {
        request.usernames.push(value);
      }
    });

    const users = await clients.prisma.user.findMany({
      where: {
        OR: [{ id: { in: request.ids } }, { username: { in: request.usernames } }],
        deletedAt: null,
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  });
