import { Query } from "./Query";
import { type Resolvers } from "../types.generated";

export const resolvers = {
  Query,
  User: {
    id: (u) => u.id,
    username: (u) => u.username,
  },
} satisfies Resolvers;
