import { Term, allTerms } from "@kampus/sozluk-content";
import DataLoader from "dataloader";
import { type Clients } from "~/clients/types";
import { type SozlukTerm } from "~/schema/types.generated";
import { LoaderKey } from "./utils/loader-key";

export type SozlukTermsLoader = DataLoader<SozlukTermLoaderKey, SozlukTerm>;
export class SozlukTermLoaderKey extends LoaderKey<"id", string> { }

export const createSozlukLoaders = (clients: Clients) => {
  return {
    term: createTermLoader(clients),
    terms: createTermsLoader(clients),
  };
};

export type SozlukTermLoader = ReturnType<typeof createTermLoader>;
export type SozlukTermsLoader = ReturnType<typeof createTermsLoader>;

const transformTerm = (term: Term) => {
  return {
    id: term.id,
    title: term.title,
    tags: term.tags,
    body: {
      raw: term.body.raw,
      code: term.body.code,
      html: term.mdxHtml,
    },
  };
};

const createTermLoader = (_: Clients) =>
  new DataLoader<string, SozlukTerm>(
    async (keys) =>
      keys
        .map((key) => {
          const term = allTerms.find((term) => term.id === key);
          if (!term) {
            return null;
          }
          return transformTerm(term);
        })
        .filter(Boolean) as SozlukTerm[]
  );

const createTermsLoader = (_: Clients) =>
  new DataLoader<string, SozlukTerm[]>(async () => {
    return [allTerms.map(transformTerm)];
  });
