import { type SozlukQueryResolvers } from "~/schema/types.generated";

export const terms: SozlukQueryResolvers["terms"] = (_, args, { loaders }) => {
  return loaders.sozluk.terms.load({ ...args });
};
