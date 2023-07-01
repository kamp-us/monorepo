export function applyCursors<T extends { id: string }>(
  data: T[],
  before?: string | null,
  after?: string | null
) {
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

export function applyPagination<T extends { id: string }>(
  data: T[],
  before?: string | null,
  after?: string | null,
  first?: number | null,
  last?: number | null
) {
  let copy = applyCursors(data, before, after);
  copy = applyFirstAndLast({ data: copy, first, last });
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
    const items = applyCursors(data, before, after);
    return items.length > first;
  }

  if (before) {
    const beforeIndex = data.findIndex((item) => item.id === before);
    if (beforeIndex !== -1) {
      const remainingItems = data.slice(beforeIndex + 1);
      return remainingItems.length > 0;
    }
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
    const items = applyCursors(data, before, after);
    return items.length > last;
  }

  if (after) {
    const afterIndex = data.findIndex((item) => item.id === after);
    if (afterIndex !== -1) {
      const remainingItems = data.slice(0, afterIndex);
      return remainingItems.length > 0;
    }
  }

  return false;
}

export const generatePageInfo = <T extends { id: string }>(args: PaginationArgs<T>) => {
  const { data, before, after, first, last } = args;

  const items = applyPagination(data, before, after, first, last);

  const startCursor = items.length > 0 ? items[0].id : null;
  const endCursor = items.length > 0 ? items[items.length - 1].id : null;

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
  } else if (last) {
    if (last < 0) {
      throw new Error('Invalid value for "last".');
    }
    copy = copy.slice(-last);
  }

  return copy;
};
