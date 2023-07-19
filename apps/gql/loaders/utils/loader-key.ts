export interface LoaderKey<T extends string = string> {
  identifier: T;
  value: string;
}

export const KeyFactory = <TIdentifier extends string>(
  identifier: TIdentifier,
  value: string
): LoaderKey<TIdentifier> => ({
  identifier,
  value,
});

const defaults = {
  errorMapperFn: (key: LoaderKey) => new Error(`Post not found: ${key.identifier}: ${key.value}`),
};

export const mapKeys = <V extends string, TPrisma extends Record<string, unknown>, TGql>(
  keys: readonly LoaderKey<V>[],
  posts: TPrisma[],
  itemMapperFn: (dbItem: TPrisma) => TGql,
  errorMapperFn?: (key: LoaderKey<V>) => Error
): (TGql | Error)[] => {
  return keys.map((key) => {
    const dbItem = posts.find((post) => post[key.identifier] === key.value);
    // if there is a db item use itemMapperFn
    if (dbItem) {
      return itemMapperFn(dbItem);
    }
    // if we have an errorMapperFn pass key to it return the result
    if (errorMapperFn) {
      return errorMapperFn(key);
    }

    // use default error
    return defaults.errorMapperFn(key);
  });
};

export const pickValues = <T extends LoaderKey<V>, V extends string>(list: T[]): string[] =>
  list.map((item) => item.value);
