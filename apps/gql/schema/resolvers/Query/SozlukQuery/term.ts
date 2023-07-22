import { type SozlukQueryResolvers } from "~/schema/types.generated";

export const term: SozlukQueryResolvers["term"] = (_, args, { loaders }) => {
  return loaders.sozluk.term.load(args.id);
};
