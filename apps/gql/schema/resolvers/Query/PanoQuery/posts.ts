import { type PanoQueryResolvers } from "~/schema/types.generated";

export const posts: PanoQueryResolvers["posts"] = (_, args, { loaders }) => {
  return loaders.pano.posts.load({ ...args });
};
