import { UserLoaderKey } from "~/loaders/users";
import { type QueryResolvers } from "~/schema/types.generated";

export const user: QueryResolvers["user"] = (_, { input }, { loaders }) => {
  if (!input) {
    throw new Error("input is required");
  }

  if (input.id) {
    return loaders.users.load(new UserLoaderKey("id", input.id));
  }

  if (input.username) {
    return loaders.users.load(new UserLoaderKey("username", input.username));
  }

  throw new Error("id or username is required");
};
