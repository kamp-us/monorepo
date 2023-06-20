import { allTerms, type Term } from "@kampus/sozluk-content";
import DataLoader from "dataloader";
import hash from "object-hash";
import { type Clients } from "~/clients/types";
import {
  type SozlukQueryTermsArgs,
  type SozlukTerm,
  type SozlukTermConnection,
} from "~/schema/types.generated";
import { applyCursorsToData, hasNextPage, hasPreviousPage } from "./utils/pagination";

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
  new DataLoader<Partial<SozlukQueryTermsArgs>, SozlukTermConnection, string>(
    async (keys) => {
      return termsLoaderBatchFn(keys);
    },
    {
      cacheKeyFn: (key) => hash(key),
    }
  );

const termsLoaderBatchFn = (keys: readonly Partial<SozlukQueryTermsArgs>[]) => {
  const results: SozlukTermConnection[] = [];

  for (const key of keys) {
    const { before, after, first, last } = key;

    let terms = applyCursorsToData(allTerms, before, after);

    // Apply pagination filters
    if (first) {
      if (first < 0) {
        throw new Error('Invalid value for "first".');
      }
      terms = terms.slice(0, first);
    } else if (last) {
      if (last < 0) {
        throw new Error('Invalid value for "last".');
      }
      terms = terms.slice(-last);
    }

    const edges = terms.map((term) => ({ cursor: term.id, node: transformTerm(term) }));

    const startCursor = terms.length > 0 ? terms[0].id : null;
    const endCursor = terms.length > 0 ? terms[terms.length - 1].id : null;
    const totalCount = allTerms.length;

    const result = {
      edges,
      pageInfo: {
        startCursor,
        endCursor,
        hasNextPage: hasNextPage({ data: terms, before, first }),
        hasPreviousPage: hasPreviousPage({ data: terms, after, last }),
      },
      totalCount,
    };

    results.push(result);
  }

  return results;
};
