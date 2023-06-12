import { SozlukTermLoaderKey } from "~/loaders/sozluk";
import { type SozlukQueryResolvers } from "~/schema/types.generated";

export const term: SozlukQueryResolvers["term"] = (_, { input }, { loaders }) => {
  if (!input) {
    throw new Error("input is required");
  }

  return loaders.sozluk.terms.load(new SozlukTermLoaderKey("id", input.id));
};
