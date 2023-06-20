export function applyCursorsToData<T extends { id: string }>(
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

type hasNextPageArgs<T extends { id: string }> = {
  data: T[];
  first?: number | null;
  before?: string | null;
};

export function hasNextPage<T extends { id: string }>({ data, before, first }: hasNextPageArgs<T>) {
  if (first) {
    return data.length > first;
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

type hasPreviousPageArgs<T> = {
  data: T[];
  after?: string | null;
  last?: number | null;
};

// Determine if there are more edges prior to the set
export function hasPreviousPage<T extends { id: string }>({
  data,
  after,
  last,
}: hasPreviousPageArgs<T>) {
  if (last) {
    return data.length > last;
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
