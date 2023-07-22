import { UserLoaderKey } from "~/loaders/users";
import { type QueryResolvers } from "~/schema/types.generated";

export const user: QueryResolvers["user"] = (_, args, { loaders }) => {
  if (args.id) {
    return loaders.users.load(new UserLoaderKey("id", args.id));
  }

  if (args.username) {
    return loaders.users.load(new UserLoaderKey("username", args.username));
  }

  throw new Error("id or username is required");
};
