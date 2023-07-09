import { type PanoQueryResolvers } from "~/schema/types.generated";

export const post: PanoQueryResolvers["post"] = (_, args, { loaders }) => {
  if (!args.input) {
    throw new Error("input is required");
  }

  return loaders.pano.post.load(args);
};
