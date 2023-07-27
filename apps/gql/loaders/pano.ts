import { createPrismaConnectionLoader, createPrismaLoader } from "@kampus/gql-utils";
import { type Connection } from "@kampus/gql-utils/connection";
import { type Post } from "@kampus/prisma";

import { type Clients } from "~/clients";
import { type PanoPost, type PanoPostConnection } from "~/schema/types.generated";

export type PanoLoaders = ReturnType<typeof createPanoLoaders>;

export const createPanoLoaders = (clients: Clients) => {
  return {
    post: createPanoPostLoaders(clients),
  };
};

const createPanoPostLoaders = ({ prisma }: Clients) => {
  const cachePostConnection = (connections: Connection<Post>[]) => {
    connections.forEach((connection) => {
      connection.nodes.forEach(cachePost);
    });
  };

  const cachePost = (post: Post) => {
    byID.prime(post.id, post);
  };

  const byID = createPrismaLoader(prisma.post, "id");
  const byUserID = createPrismaConnectionLoader(prisma.post, "userID", cachePostConnection);
  const all = createPrismaConnectionLoader(prisma.post, null);

  return {
    byID,
    byUserID,
    all,
  };
};

export const transformPanoPost = (post: Post) => {
  return {
    ...post,
    __typename: "PanoPost",
    owner: null,
    createdAt: post.createdAt.toISOString(),
  } satisfies PanoPost;
};

export const transformPanoPostConnection = (connection: Connection<Post>) => {
  return {
    nodes: connection.nodes.map(transformPanoPost),
    edges: connection.edges.map((edge) => ({
      ...edge,
      node: transformPanoPost(edge.node),
    })),
    pageInfo: {
      ...connection.pageInfo,
      endCursor: connection.pageInfo.endCursor ?? null,
      startCursor: connection.pageInfo.startCursor ?? null,
    },
    totalCount: connection.totalCount,
  } satisfies PanoPostConnection;
};
