import { type SozlukQueryResolvers, type SozlukTerm } from "~/schema/types.generated";

export const terms: SozlukQueryResolvers["terms"] = async (_, args, { loaders }) => {
  // Fetch all the terms
  const allTerms = await loaders.sozluk.terms.load("");

  const { after, before, first, last } = args;

  // Apply cursors to edges
  let terms = applyCursorsToTerms(allTerms, before, after);

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

  const edges = terms.map((term) => ({ cursor: term.id, node: term }));

  const startCursor = terms.length > 0 ? terms[0].id : null;
  const endCursor = terms.length > 0 ? terms[terms.length - 1].id : null;
  const totalCount = allTerms.length;

  return {
    edges,
    pageInfo: {
      startCursor,
      endCursor,
      hasNextPage: hasNextPage({ terms, before, first }),
      hasPreviousPage: hasPreviousPage({ terms, after, last }),
    },
    totalCount,
  };
};

function applyCursorsToTerms(terms: SozlukTerm[], before?: string | null, after?: string | null) {
  if (after) {
    const afterIndex = terms.findIndex((term) => term.id === after);
    if (afterIndex !== -1) {
      terms = terms.slice(afterIndex + 1);
    }
  }

  if (before) {
    const beforeIndex = terms.findIndex((term) => term.id === before);
    if (beforeIndex !== -1) {
      terms = terms.slice(0, beforeIndex);
    }
  }

  return terms;
}

type hasNextPageArgs = {
  terms: SozlukTerm[];
  first?: number | null;
  before?: string | null;
};

function hasNextPage({ terms, before, first }: hasNextPageArgs) {
  if (first) {
    return terms.length > first;
  }

  if (before) {
    const beforeIndex = terms.findIndex((term) => term.id === before);
    if (beforeIndex !== -1) {
      const remainingTerms = terms.slice(beforeIndex + 1);
      return remainingTerms.length > 0;
    }
  }

  return false;
}

type hasPreviousPageArgs = {
  terms: SozlukTerm[];
  after?: string | null;
  last?: number | null;
};

// Determine if there are more edges prior to the set
function hasPreviousPage({ terms, after, last }: hasPreviousPageArgs) {
  if (last) {
    return terms.length > last;
  }

  if (after) {
    const afterIndex = terms.findIndex((term) => term.id === after);
    if (afterIndex !== -1) {
      const remainingTerms = terms.slice(0, afterIndex);
      return remainingTerms.length > 0;
    }
  }

  return false;
}
