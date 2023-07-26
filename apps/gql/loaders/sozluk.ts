import DataLoader from "dataloader";
import hash from "object-hash";

import { type Connection, type ConnectionArguments } from "@kampus/gql-utils/connection";
import { allTerms, type Term } from "@kampus/sozluk-content";

import { applyPagination, generatePageInfo } from "~/features/relay/pagination";

export const createSozlukLoaders = () => {
  return {
    term: createTermLoader(),
    terms: createTermsLoader(),
  };
};

export type SozlukTermLoader = ReturnType<typeof createTermLoader>;
export type SozlukTermsLoader = ReturnType<typeof createTermsLoader>;

export const transformSozlukTerm = (term: Term) => {
  return {
    __typename: "SozlukTerm" as const,
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

export const transformSozlukTermsConnection = (connection: Connection<Term>) => ({
  ...connection,
  nodes: connection.nodes.map(transformSozlukTerm),
  edges: connection.edges.map((edge) => ({ ...edge, node: transformSozlukTerm(edge.node) })),
  pageInfo: {
    ...connection.pageInfo,
    endCursor: connection.pageInfo.endCursor ?? null,
    startCursor: connection.pageInfo.startCursor ?? null,
  },
  totalCount: connection.totalCount,
});

const loadTerm = (id: string) => {
  const term = allTerms.find((term) => term.id === id);
  if (!term) {
    return null;
  }
  return Promise.resolve(term);
};

const createTermLoader = () =>
  new DataLoader<string, Term>(async (keys) => {
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

const createTermsLoader = () =>
  new DataLoader<ConnectionArguments, Connection<Term>, string>(
    // eslint-disable-next-line @typescript-eslint/require-await
    async (keys) => {
      const results: Connection<Term>[] = [];

      for (const key of keys) {
        const nodes = applyPagination<Term>({ data: allTerms, ...key });
        const edges = nodes.map((term) => ({ cursor: term.id, node: term }));

        const result = {
          nodes,
          edges,
          pageInfo: generatePageInfo({ data: allTerms, ...key }),
          totalCount: allTerms.length,
        };

        results.push(result);
      }

      return results;
    },
    {
      cacheKeyFn: (key) => hash(key),
    }
  );
