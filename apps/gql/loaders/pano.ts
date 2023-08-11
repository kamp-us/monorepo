import {
  createDataLoader,
  createPrismaConnectionLoader,
  createPrismaCountLoader,
  createPrismaLoader,
} from "@kampus/gql-utils";
import { type Connection } from "@kampus/gql-utils/connection";
import { type Comment, type Post, type Upvote } from "@kampus/prisma";

import { type Clients } from "~/clients";
import {
  type PanoComment,
  type PanoCommentConnection,
  type PanoPost,
  type PanoPostConnection,
  type PanoUpvote,
} from "~/schema/types.generated";

export type PanoLoaders = ReturnType<typeof createPanoLoaders>;

export const createPanoLoaders = (clients: Clients) => {
  return {
    post: createPanoPostLoaders(clients),
    comment: createPanoCommentLoaders(clients),
    upvote: createPanoUpvoteLoaders(clients),
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
  const bySite = createPrismaConnectionLoader(prisma.post, "site", cachePostConnection);
  const all = createPrismaConnectionLoader(prisma.post, null);

  return {
    byID,
    byUserID,
    bySite,
    all,
  };
};

const createPanoUpvoteLoaders = ({ prisma }: Clients) => {
  const byPostID = createPrismaLoader(prisma.upvote, "id");
  const byCommentID = createPrismaLoader(prisma.commentUpvote, "id");

  const countByPostID = createPrismaCountLoader(prisma.upvote, "postID");
  const countByCommentID = createPrismaCountLoader(prisma.commentUpvote, "commentID");

  const byUserAndPostID = createDataLoader(
    async (keys: readonly { postID: string; userID: string }[]) => {
      const promises = keys.map(({ postID, userID }) =>
        prisma.upvote.findUnique({ where: { postID_userID: { postID, userID } } })
      );

      const results = await Promise.allSettled(promises).then((results) =>
        results.map((result) => (result.status === "fulfilled" ? result.value : null))
      );

      results.forEach((upvote) => {
        if (upvote) {
          byPostID.prime(upvote.id, upvote);
        }
      });

      return results;
    }
  );

  const byUserAndCommentID = createDataLoader(
    async (keys: readonly { commentID: string; userID: string }[]) => {
      const promises = keys.map(({ commentID, userID }) =>
        prisma.commentUpvote.findUnique({ where: { commentID_userID: { commentID, userID } } })
      );

      const results = await Promise.allSettled(promises).then((results) =>
        results.map((result) => (result.status === "fulfilled" ? result.value : null))
      );

      results.forEach((upvote) => {
        if (upvote) {
          byCommentID.prime(upvote.id, upvote);
        }
      });

      return results;
    }
  );

  return {
    byPostID,
    byUserAndPostID,
    byUserAndCommentID,
    countByPostID,
    countByCommentID,
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
  const countByPostID = createPrismaCountLoader(prisma.comment, "postID");
  const countByParentID = createPrismaCountLoader(prisma.comment, "parentID");
  const all = createPrismaConnectionLoader(prisma.comment, null);

  return {
    byID,
    byParentID,
    byPostID,
    countByPostID,
    countByParentID,
    all,
  };
};

export const transformPanoPost = (post: Post) => {
  return {
    ...post,
    __typename: "PanoPost",
    owner: null,
    comments: null,
    commentCount: null,
    upvoteCount: null,
    isUpvotedByViewer: false,
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
    commentCount: null,
    upvoteCount: null,
    isUpvotedByViewer: false,
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

export const transformPanoUpvote = (upvote: Upvote) => {
  return {
    ...upvote,
    __typename: "PanoUpvote",
    node: null,
    owner: null,
  } satisfies PanoUpvote;
};
