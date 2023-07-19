import {
  findManyCursorConnection,
  type ConnectionArguments,
} from "@devoxa/prisma-relay-cursor-connection";
import DataLoader from "dataloader";
import hash from "object-hash";

export function createPrismaLoader<TPrisma extends Record<string, unknown>>(
  table: Table<TPrisma>,
  identifier: string,
  tableDidFetch?: (items: TPrisma[]) => void
) {
  return new DataLoader<string, TPrisma>(async (keys: readonly string[]) => {
    const items = await table.findMany({
      where: {
        [identifier]: { in: keys as string[] },
        deletedAt: null,
      },
    });

    tableDidFetch?.(items);

    return keys.map((key) => {
      const item = items.find((item) => item[identifier] === key);

      return item ?? new Error(`not found: ${identifier}: ${key}`);
    });
  });
}

interface FindManyArgs {
  where?: { [key: string]: string | { in: string[] } | null };
  orderBy?: { createdAt: "asc" | "desc" };
  cursor?: { id: string };
  take?: number;
}

interface CountArgs {
  where: FindManyArgs["where"];
}

type Table<TPrisma> = {
  findMany(args: FindManyArgs): Promise<TPrisma[]>;
  count(args: CountArgs): Promise<number>;
};

interface GQLConnectionKey extends ConnectionArguments {
  parentID: string | null;
}

export const ConnectionKey = (parentID: string | null, args?: ConnectionArguments | null) => {
  return {
    parentID,
    before: args?.before,
    after: args?.after,
    first: args?.first,
    last: args?.last,
  } satisfies GQLConnectionKey;
};

export function createPrismaConnectionLoader<TPrisma extends Record<string, unknown>>(
  table: Table<TPrisma>,
  identifier: string | null,
  postTransformFn?: (transformed: TPrisma[][]) => void
) {
  return new DataLoader(
    async (keys: readonly GQLConnectionKey[]) => {
      const items = await Promise.all(
        keys.map(async (key) => {
          const where =
            identifier && key.parentID
              ? { [identifier]: key.parentID, deletedAt: null }
              : { deletedAt: null };

          return findManyCursorConnection(
            (args) => table.findMany({ ...args, where }),
            () => table.count({ where }),
            key
          );
        })
      );

      postTransformFn?.(items.map((i) => i.nodes));

      return items;
    },
    { cacheKeyFn: (key) => hash(key) }
  );
}
