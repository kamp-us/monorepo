import { GetBatchUsersRequest, UsersClient } from "@kampus-protos/users";
import DataLoader from "dataloader";
import { User } from "../schema";

type UserLoaderKeyIdentifier = "id" | "username" | "email";
export type UserLoaderKey = `${UserLoaderKeyIdentifier}_${string}`;

const parseUserLoaderKey = (key: string): [UserLoaderKeyIdentifier, string] => {
  return key.split("_") as [UserLoaderKeyIdentifier, string];
};

export type UsersLoader = DataLoader<UserLoaderKey, User>;

export const createUsersLoader = (clients: { users: UsersClient }): UsersLoader =>
  new DataLoader<UserLoaderKey, User>(async (keys: readonly UserLoaderKey[]) => {
    const request: GetBatchUsersRequest = {
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

    const response = await clients.users.GetBatchUsers(request);

    const users = response.users || [];

    return users.map((user) => ({
      id: user.id,
      username: user.username,
    }));
  });
