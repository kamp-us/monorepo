import { createPrismaConnectionLoader, createPrismaLoader } from "@kampus/gql-utils";
import { type Connection } from "@kampus/gql-utils/connection";
import { type Post } from "@kampus/prisma";

import { type Clients } from "~/clients";
import {
  type PanoComment,
  type PanoCommentConnection,
  type PanoPost,
  type PanoPostConnection,
} from "~/schema/types.generated";
import { type Comment } from ".prisma/client";

export type PanoLoaders = ReturnType<typeof createPanoLoaders>;

export const createPanoLoaders = (clients: Clients) => {
  return {
    post: createPanoPostLoaders(clients),
    comment: createPanoCommentLoaders(clients),
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

const createPanoCommentLoaders = ({ prisma }: Clients) => {
  const cacheCommentConnection = (connections: Connection<Comment>[]) => {
    connections.forEach((connection) => {
      connection.nodes.forEach(cacheComment);
    });
  };

  const cacheComment = (comment: Comment) => {
    byID.prime(comment.id, comment);
  };

  const byID = createPrismaLoader(prisma.comment, "id");
  const byParentID = createPrismaConnectionLoader(
    prisma.comment,
    "parentID",
    cacheCommentConnection
  );
  const byPostID = createPrismaConnectionLoader(prisma.comment, "postID", cacheCommentConnection);
  const all = createPrismaConnectionLoader(prisma.comment, null);

  return {
    byID,
    byParentID,
    byPostID,
    all,
  };
};

export const transformPanoPost = (post: Post) => {
  return {
    ...post,
    __typename: "PanoPost",
    owner: null,
    comments: null,
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

export const transformPanoComment = (comment: Comment) => {
  return {
    ...comment,
    __typename: "PanoComment",
    owner: null,
    parent: null,
    post: null,
    comments: null,
    createdAt: comment.createdAt.toISOString(),
  } satisfies PanoComment;
};

export const transformPanoCommentConnection = (connection: Connection<Comment>) => {
  return {
    nodes: connection.nodes.map(transformPanoComment),
    edges: connection.edges.map((edge) => ({
      ...edge,
      node: transformPanoComment(edge.node),
    })),
    pageInfo: {
      ...connection.pageInfo,
      endCursor: connection.pageInfo.endCursor ?? null,
      startCursor: connection.pageInfo.startCursor ?? null,
    },
    totalCount: connection.totalCount,
  } satisfies PanoCommentConnection;
};
