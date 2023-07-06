import { type Resolvers } from "../types.generated";
import { term } from "./Query/SozlukQuery/term";
import { terms } from "./Query/SozlukQuery/terms";
import { user } from "./Query/user";

export const resolvers = {
  Query: {
    user,
    // fix-me(@umut): wtf is this??
    sozluk: () => {
      return {
        term: null,
        terms: null,
      };
    },
  },
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
