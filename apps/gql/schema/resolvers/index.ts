import { Resolvers } from "../types.generated";
import { Query } from "./Query";

export const resolvers = {
  Query,
  User: {
    id: (u) => u.id,
    username: (u) => u.username,
  },
} satisfies Resolvers;
