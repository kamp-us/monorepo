import DataLoader from "dataloader";
import hash from "object-hash";

import { allTerms, type Term } from "@kampus/sozluk-content";

import { applyPagination, generatePageInfo } from "~/features/relay/pagination";
import { type Clients } from "~/clients";
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

// eslint-disable-next-line @typescript-eslint/require-await
const loadTerm = async (id: string) => {
  const term = allTerms.find((term) => term.id === id);
  if (!term) {
    return null;
  }
  return transformTerm(term);
};

const createTermLoader = (_: Clients) =>
  new DataLoader<string, SozlukTerm>(async (keys) => {
    return await Promise.all(
      keys.map(async (key) => {
        const term = await loadTerm(key);
        if (!term) {
          return new Error(`Term not found for: ${key}`);
        }
        return term;
      })
    );
  });

const createTermsLoader = (_: Clients) =>
  new DataLoader<Partial<SozlukQueryTermsArgs>, SozlukTermConnection, string>(termsLoaderBatchFn, {
    cacheKeyFn: (key) => hash(key),
  });

const termsLoaderBatchFn = async (keys: readonly Partial<SozlukQueryTermsArgs>[]) => {
  const results: SozlukTermConnection[] = [];

  for (const key of keys) {
    const { before, after, first, last } = key;

    const terms = applyPagination<Term>({ data: allTerms, before, after, first, last });

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
