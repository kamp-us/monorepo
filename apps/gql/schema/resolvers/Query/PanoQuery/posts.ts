import { transformPost } from "~/loaders/pano";
import { ConnectionKey } from "~/loaders/utils/prisma-data-loader";
import { type PanoPostsConnection, type PanoQueryResolvers } from "~/schema/types.generated";

export const posts: PanoQueryResolvers["posts"] = async (_, args, { loaders }) => {
  return loaders.pano.posts.load(ConnectionKey(null, args)).then((connection) => {
    return {
      nodes: connection.nodes.map(transformPost),
      edges: connection.edges.map((edge) => ({
        ...edge,
        node: transformPost(edge.node),
      })),
      pageInfo: connection.pageInfo,
      totalCount: connection.totalCount,
    } as PanoPostsConnection;
  });
};
