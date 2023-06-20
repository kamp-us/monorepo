import { type SozlukQueryResolvers } from "~/schema/types.generated";

export const terms: SozlukQueryResolvers["terms"] = (_, args, { loaders }) => {
  // Fetch all the terms

  return loaders.sozluk.terms.load({ ...args });

  // Apply cursors to edges
};
