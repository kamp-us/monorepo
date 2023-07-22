import { DateResolver, DateTimeResolver } from "graphql-scalars";

import { UserLoaderKey } from "~/loaders/user";
import { type Resolvers } from "../types.generated";

export const resolvers = {
  Date: DateResolver,
  DateTime: DateTimeResolver,
  Query: {
    user: (_, args, { loaders }) =>
      args.id
        ? loaders.user.load(new UserLoaderKey("id", args.id))
        : args.username
        ? loaders.user.load(new UserLoaderKey("username", args.username))
        : null,
    sozluk: () => {
      return {
        term: null,
        terms: null,
      };
    },
  },
  SozlukQuery: {
    term: (_, args, { loaders }) => loaders.sozluk.term.load(args.id),
    terms: (_, args, { loaders }) => loaders.sozluk.terms.load(args),
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
  PageInfo: {
    hasNextPage: (pageInfo) => pageInfo.hasNextPage,
    hasPreviousPage: (pageInfo) => pageInfo.hasPreviousPage,
    startCursor: (pageInfo) => pageInfo.startCursor,
    endCursor: (pageInfo) => pageInfo.endCursor,
  },
  User: {
    id: (u) => u.id,
    username: (u) => u.username,
  },
} satisfies Resolvers;
