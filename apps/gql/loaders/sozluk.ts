import {
  applyCursors,
  applyFirstAndLast,
  applyPagination,
  generatePageInfo,
} from "@kampus/relay/pagination";
import { allTerms, type Term } from "@kampus/sozluk-content";
import DataLoader from "dataloader";
import hash from "object-hash";
import { type Clients } from "~/clients/types";
import {
  type SozlukQueryTermsArgs,
  type SozlukTerm,
  type SozlukTermConnection,
} from "~/schema/types.generated";

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
  new DataLoader<Partial<SozlukQueryTermsArgs>, SozlukTermConnection, string>(termsLoaderBatchFn, {
    cacheKeyFn: (key) => hash(key),
  });

const termsLoaderBatchFn = async (keys: readonly Partial<SozlukQueryTermsArgs>[]) => {
  const results: SozlukTermConnection[] = [];

  for (const key of keys) {
    const { before, after, first, last } = key;

    const terms = applyPagination(allTerms, before, after, first, last);

    const edges = terms.map((term) => ({ cursor: term.id, node: transformTerm(term) }));

    const totalCount = allTerms.length;

    const result = {
      edges,
      // need to pass the same args to generatePageInfo
      pageInfo: generatePageInfo({ data: allTerms, before, after, first, last }),
      totalCount,
    };

    results.push(result);
  }

  return results;
};
