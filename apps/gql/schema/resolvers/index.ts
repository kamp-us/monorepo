import { type Resolvers } from "../types.generated";
import { term } from "./Query/SozlukQuery/term";
import { terms } from "./Query/SozlukQuery/terms";
import { user } from "./Query/user";

export const resolvers = {
  Query: {
    user,
    // fix-me(@umut): wtf is this??
    sozluk: () => ({}),
  },
  SozlukQuery: {
    term,
    terms,
  },
} satisfies Resolvers;
