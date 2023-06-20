import { type Resolvers } from "../types.generated";
import { term } from "./Query/SozlukQuery/term";
import { user } from "./Query/user";

export const resolvers = {
  Query: {
    user,
    // fix-me(@umut): wtf is this??
    sozluk: () => {
      return {
        term: null,
      };
    },
  },
  SozlukQuery: {
    term,
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
  User: {
    id: (u) => u.id,
    username: (u) => u.username,
  },
} satisfies Resolvers;
