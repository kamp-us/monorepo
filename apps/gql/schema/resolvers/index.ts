import { DateResolver, DateTimeResolver } from "graphql-scalars";

import { parse, stringify } from "@kampus/gql-utils/global-id";
import { type User } from "@kampus/prisma";
import { assertNever } from "@kampus/std";
import { type Dictionary } from "@kampus/std/dictionary";

import { transformSozlukTerm, transformSozlukTermsConnection } from "~/loaders/sozluk";
import { transformUser } from "~/loaders/user";
import { type Resolvers, type ResolversInterfaceTypes } from "../types.generated";

type NodeTypename = ResolversInterfaceTypes<Dictionary>["Node"]["__typename"];

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
  },
  SozlukQuery: {
    term: async (_, args, { loaders }) =>
      transformSozlukTerm(await loaders.sozluk.term.load(args.id)),
    terms: async (_, args, { loaders }) =>
      transformSozlukTermsConnection(await loaders.sozluk.terms.load(args)),
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
    pageInfo: (connection) => connection.pageInfo,
    totalCount: (connection) => connection.totalCount,
  },
  SozlukTermEdge: {
    node: (edge) => edge.node,
    cursor: (edge) => edge.cursor,
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
  },
} satisfies Resolvers;
