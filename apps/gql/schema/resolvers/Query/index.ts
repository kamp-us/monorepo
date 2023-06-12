import { user } from "./user";
import { type QueryResolvers } from "~/schema/types.generated";

export const Query = {
  user,
} satisfies QueryResolvers;
