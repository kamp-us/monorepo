import { type SozlukQueryResolvers } from "~/schema/types.generated";

export const term: SozlukQueryResolvers["term"] = (_, { input }, { loaders }) => {
  if (!input) {
    throw new Error("input is required");
  }

  return loaders.sozluk.term.load(input.id);
};
