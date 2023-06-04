import { QueryResolvers } from "~/schema/types.generated";
import { user } from "./user";

export const Query = {
  user,
} satisfies QueryResolvers;
