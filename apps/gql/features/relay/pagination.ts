interface ApplyCursorsArgs<T> {
  data: T[];
  before?: string | null;
  after?: string | null;
}

export function applyCursors<T extends { id: string }>(args: ApplyCursorsArgs<T>) {
  const { before, after } = args;
  let { data } = args;

  if (after) {
    const afterIndex = data.findIndex((item) => item.id === after);
    if (afterIndex !== -1) {
      data = data.slice(afterIndex + 1);
    }
  }

  if (before) {
    const beforeIndex = data.findIndex((item) => item.id === before);
    if (beforeIndex !== -1) {
      data = data.slice(0, beforeIndex);
    }
  }

  return data;
}

interface ApplyPaginationArgs<T> {
  data: T[];
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
}

export function applyPagination<T extends { id: string }>({
  data,
  before,
  after,
  first,
  last,
}: ApplyPaginationArgs<T>) {
  let copy = applyCursors<T>({ data, before, after });
  copy = applyFirstAndLast<T>({ data: copy, first, last });
  return copy;
}

type PaginationArgs<T extends { id: string }> = {
  before?: string | null;
  after?: string | null;
  first?: number | null;
  last?: number | null;
  data: T[];
};

export function hasNextPage<T extends { id: string }>({
  data,
  before,
  first,
  after,
}: PaginationArgs<T>) {
  if (first) {
    data = applyCursors({ data, before, after });
    return data.length > first;
  }

  return false;
}

export function hasPreviousPage<T extends { id: string }>({
  data,
  after,
  last,
  before,
}: PaginationArgs<T>) {
  if (last) {
    const items = applyCursors({ data, before, after });
    return items.length > last;
  }

  return false;
}

export const generatePageInfo = <T extends { id: string }>(args: PaginationArgs<T>) => {
  const { data, before, after, first, last } = args;

  const items = applyPagination<T>({ data, before, after, first, last });

  const startCursor = items[0]?.id ?? null;
  const endCursor = items[items.length - 1]?.id ?? null;

  return {
    startCursor,
    endCursor,
    // need to pass original args to hasNextPage and hasPreviousPage
    hasNextPage: hasNextPage({ data, first, before, after }),
    hasPreviousPage: hasPreviousPage({ data, last, before, after }),
  };
};

interface ApplyFirstAndLastArgs<T> {
  data: T[];
  first?: number | null;
  last?: number | null;
}

export const applyFirstAndLast = <T>(args: ApplyFirstAndLastArgs<T>) => {
  const { data, first, last } = args;
  let copy = [...data];

  if (first) {
    if (first < 0) {
      throw new Error('Invalid value for "first".');
    }
    copy = copy.slice(0, first);
  }

  if (last) {
    if (last < 0) {
      throw new Error('Invalid value for "last".');
    }
    copy = copy.slice(-last);
  }

  return copy;
};
