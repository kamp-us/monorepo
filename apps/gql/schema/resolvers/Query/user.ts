import { UserLoaderKey } from "~/loaders/user";
import { type QueryResolvers } from "~/schema/types.generated";

export const user: QueryResolvers["user"] = (_, args, { loaders }) => {
  if (args.id) {
    return loaders.user.load(new UserLoaderKey("id", args.id));
  }

  if (args.username) {
    return loaders.user.load(new UserLoaderKey("username", args.username));
  }

  throw new Error("id or username is required");
};
