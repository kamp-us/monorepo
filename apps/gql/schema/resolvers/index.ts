import { DateResolver, DateTimeResolver } from "graphql-scalars";

import { ConnectionKey } from "@kampus/gql-utils";
import { type ConnectionArguments, type PageInfo } from "@kampus/gql-utils/connection";
import { parse, stringify } from "@kampus/gql-utils/global-id";
import { type User } from "@kampus/prisma";
import { assertNever } from "@kampus/std";
import { type Dictionary } from "@kampus/std/dictionary";

import { transformPanoPost, transformPanoPostConnection } from "~/loaders/pano";
import { transformSozlukTerm, transformSozlukTermsConnection } from "~/loaders/sozluk";
import { transformUser } from "~/loaders/user";
import { type Resolvers, type ResolversInterfaceTypes } from "../types.generated";

type NodeTypename = ResolversInterfaceTypes<Dictionary>["Node"]["__typename"];

const transformPageInfo = (type: NodeTypename, pageInfo: PageInfo) => ({
  ...pageInfo,
  startCursor: stringify(type, pageInfo.startCursor ?? ""),
  endCursor: stringify(type, pageInfo.endCursor ?? ""),
});

const parseConnectionArgs = (args: ConnectionArguments) => ({
  ...args,
  after: args.after ? parse(args.after).value : null,
  before: args.before ? parse(args.before).value : null,
});

export const resolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Node: {},

  Query: {
    node: async (_, args, { loaders }) => {
      const id = parse<NodeTypename>(args.id);

      switch (id.type) {
        case "User":
          return transformUser(await loaders.user.byID.load(id.value));
        case "SozlukTerm":
          return transformSozlukTerm(await loaders.sozluk.term.load(id.value));
        case "PanoPost":
          return transformPanoPost(await loaders.pano.post.byID.load(id.value));
        default:
          return assertNever(id.type);
      }
    },

    user: async (_, args, { loaders }) => {
      let user: User | null = null;

      if (args.id) {
        user = await loaders.user.byID.load(parse(args.id).value);
      } else if (args.username) {
        user = await loaders.user.byUsername.load(args.username);
      }

      if (!user) {
        return null;
      }

      return transformUser(user);
    },

    sozluk: () => {
      return {
        term: null,
        terms: null,
      };
    },

    pano: () => ({ post: null, posts: [], allPosts: null }),
  },
  SozlukQuery: {
    term: async (_, args, { loaders }) =>
      transformSozlukTerm(await loaders.sozluk.term.load(args.id)),
    terms: async (_, args, { loaders }) => {
      return transformSozlukTermsConnection(
        await loaders.sozluk.terms.load(parseConnectionArgs(args))
      );
    },
  },
  SozlukTerm: {
    id: (term) => stringify("SozlukTerm", term.id),
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
    pageInfo: (connection) => transformPageInfo("SozlukTerm", connection.pageInfo),
    totalCount: (connection) => connection.totalCount,
  },
  SozlukTermEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => stringify("SozlukTerm", edge.cursor),
  },
  PanoQuery: {
    post: async (_, args, { loaders }) =>
      transformPanoPost(await loaders.pano.post.byID.load(args.id)),
    posts: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.byID.loadMany(args.ids);

      return posts.map((post) => {
        return post instanceof Error ? null : transformPanoPost(post);
      });
    },
    allPosts: async (_, args, { loaders }) => {
      const posts = await loaders.pano.post.all.load(
        new ConnectionKey(null, parseConnectionArgs(args))
      );

      return transformPanoPostConnection(posts);
    },
  },
  PanoPost: {
    id: (post) => stringify("PanoPost", post.id),
    title: (post) => post.title,
    url: (post) => post.url,
    content: (post) => post.content,
    owner: async (parent, _, { loaders }) => {
      const post = await loaders.pano.post.byID.load(parent.id);
      const user = await loaders.user.byID.load(post.userID);
      return transformUser(user);
    },
    createdAt: (post) => post.createdAt,
  },
  PanoPostConnection: {
    nodes: (connection) => connection.nodes,
    edges: (connection) => connection.edges,
    pageInfo: (connection) => transformPageInfo("PanoPost", connection.pageInfo),
    totalCount: (connection) => connection.totalCount,
  },
  PanoPostEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => stringify("PanoPost", edge.cursor),
  },
  PageInfo: {
    hasNextPage: (pageInfo) => pageInfo.hasNextPage,
    hasPreviousPage: (pageInfo) => pageInfo.hasPreviousPage,
    startCursor: (pageInfo) => pageInfo.startCursor,
    endCursor: (pageInfo) => pageInfo.endCursor,
  },
  User: {
    id: (user) => stringify("User", user.id),
    username: (u) => u.username,
    panoPosts: async (user, args, { loaders }) =>
      transformPanoPostConnection(
        await loaders.pano.post.byUserID.load(new ConnectionKey(user.id, args))
      ),
  },
} satisfies Resolvers;
