import { type Connection } from "@devoxa/prisma-relay-cursor-connection";

import { type Post } from "@kampus/prisma";

import { type Clients } from "~/clients";
import { type PanoPost, type PanoPostsConnection } from "~/schema/types.generated";
import { createPrismaConnectionLoader, createPrismaLoader } from "./utils/prisma-data-loader";

export type PanoLoaders = ReturnType<typeof createPanoLoaders>;

export const createPanoLoaders = ({ prisma }: Clients) => {
  return {
    post: {
      byID: createPrismaLoader(prisma.post, "id"),
      byUserID: createPrismaConnectionLoader(prisma.post, "userID"),
    },
    posts: createPrismaConnectionLoader(prisma.post, null),
  };
};

export const transformPost = (post: Post): PanoPost => ({
  ...post,
  owner: null,
  createdAt: post.createdAt.toISOString(),
});

export const transpormPostConnection = (connection: Connection<Post>): PanoPostsConnection => ({
  nodes: connection.nodes.map(transformPost),
  edges: connection.edges.map((edge) => ({
    ...edge,
    node: transformPost(edge.node),
  })),
  pageInfo: {
    ...connection.pageInfo,
    endCursor: connection.pageInfo.endCursor ?? null,
    startCursor: connection.pageInfo.startCursor ?? null,
  },
  totalCount: connection.totalCount,
});
