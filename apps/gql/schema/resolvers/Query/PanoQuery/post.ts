import { type PanoQueryResolvers } from "~/schema/types.generated";

export const post: PanoQueryResolvers["post"] = (_, { input }, { loaders }) => {
  if (!input) {
    throw new Error("input is required");
  }

  return loaders.pano.post.load(input.id);
};
