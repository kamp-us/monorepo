import { DateResolver, DateTimeResolver } from "graphql-scalars";

import { transformPost } from "~/loaders/pano";
import { transformUser } from "~/loaders/user";
import { ConnectionKey } from "~/loaders/utils/prisma-data-loader";
import { posts } from "~/schema/resolvers/Query/PanoQuery/posts";
import { type PanoPostsConnection, type Resolvers } from "~/schema/types.generated";
import { term } from "./Query/SozlukQuery/term";
import { terms } from "./Query/SozlukQuery/terms";

export const resolvers = {
  Query: {
    user: async (_, { input }, { loaders }) => {
      if (input.id) {
        return transformUser(await loaders.user.byID.load(input.id));
      }

      if (input.username) {
        return transformUser(await loaders.user.byUsername.load(input.username));
      }

      throw new Error("id or username is required");
    },
    // fix-me(@umut): wtf is this??
    sozluk: () => {
      return {
        term: null,
        terms: null,
      };
    },
    pano: () => {
      return {
        post: null,
        posts: null,
      };
    },
  },
  PageInfo: {
    hasNextPage: (pageInfo) => pageInfo.hasNextPage,
    hasPreviousPage: (pageInfo) => pageInfo.hasPreviousPage,
    startCursor: (pageInfo) => pageInfo.startCursor,
    endCursor: (pageInfo) => pageInfo.endCursor,
  },
  User: {
    id: (u) => u.id,
    username: (u) => u.username,

    panoPosts: (parent, args, { loaders }) =>
      loaders.pano.post.byUserID.load(ConnectionKey(parent.id, args)).then((connection) => {
        return {
          nodes: connection.nodes.map(transformPost),
          edges: connection.edges.map((edge) => ({
            ...edge,
            node: transformPost(edge.node),
          })),
          pageInfo: connection.pageInfo,
          totalCount: connection.totalCount,
        } as PanoPostsConnection;
      }),
  },

  // Sozluk
  SozlukQuery: {
    term,
    terms,
  },
  SozlukTerm: {
    id: (term) => term.id,
    title: (term) => term.title,
    body: (term) => term.body,
    tags: (term) => term.tags,
  },
  SozlukTermBody: {
    raw: (body) => body.raw,
    code: (body) => body.code,
    html: (body) => body.html,
  },
  SozlukTermConnection: {
    edges: (connection) => connection.edges,
    pageInfo: (connection) => connection.pageInfo,
    totalCount: (connection) => connection.totalCount,
  },
  SozlukTermEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => edge.cursor,
  },

  // Pano
  PanoQuery: {
    post: async (_, { input }, { loaders }) =>
      transformPost(await loaders.pano.post.byID.load(input.id)),
    posts,
  },
  PanoPost: {
    id: (post) => post.id,
    title: (post) => post.title,
    url: (post) => post.url,
    content: (post) => post.content,
    slug: (post) => post.slug,
    owner: async (parent, _, { loaders }) => {
      const post = await loaders.pano.post.byID.load(parent.id);
      const user = await loaders.user.byID.load(post.userID);
      return transformUser(user);
    },
    createdAt: (post) => post.createdAt,
  },
  PanoPostsConnection: {
    nodes: (connection) => connection.nodes,
    edges: (connection) => connection.edges,
    pageInfo: (connection) => connection.pageInfo,
    totalCount: (connection) => connection.totalCount,
  },
  PanoPostsEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => edge.cursor,
  },
  PanoComment: {
    id: (comment) => comment.id,
    content: (comment) => comment.content,
    owner: (comment) => comment.owner,
    parent: (comment) => comment.parent,
    upvotes: (comment) => comment.upvotes,
  },
  PanoCommentUpvote: {
    id: (upvote) => upvote.id,
    owner: (upvote) => upvote.owner,
  },
  DateTime: DateTimeResolver,
  Date: DateResolver,
} satisfies Resolvers;
