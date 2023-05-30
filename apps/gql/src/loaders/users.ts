import DataLoader from "dataloader";
import { User } from "../schema";
import { Clients } from "../clients";

type UserLoaderKeyIdentifier = "id" | "username" | "email";
export type UserLoaderKey = `${UserLoaderKeyIdentifier}_${string}`;

const parseUserLoaderKey = (key: string): [UserLoaderKeyIdentifier, string] => {
  return key.split("_") as [UserLoaderKeyIdentifier, string];
};

export type UsersLoader = DataLoader<UserLoaderKey, User>;

export const createUsersLoader = (clients: Clients): UsersLoader =>
  new DataLoader<UserLoaderKey, User>(async (keys: readonly UserLoaderKey[]) => {
    const request: Record<string, string[]> = {
      ids: [],
      usernames: [],
      emails: [],
    };

    keys.forEach((key) => {
      const [identifier, value] = parseUserLoaderKey(key);
      if (identifier === "id") {
        request.ids.push(value);
      } else if (identifier === "username") {
        request.usernames.push(value);
      }
    });

    const users = await clients.prisma.user.findMany({
      where: {
        OR: [
          { id: { in: request.ids } },
          { username: { in: request.usernames } },
          { email: { in: request.emails } },
        ],
        deletedAt: null,
      },
    });

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  });
