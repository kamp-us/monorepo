import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import DataLoader from "dataloader";

import { type Connection } from "../connection";
import { type ConnectionKey } from "./connection-key";
import { type PrismaModel } from "./types";

export function createPrismaConnectionLoader<TPrisma extends { id: string }>(
  table: PrismaModel<TPrisma>,
  identifier: string | null,
  onFetchComplete?: (connection: Connection<TPrisma>[]) => void
) {
  return new DataLoader(
    async (keys: readonly ConnectionKey[]) => {
      const items = await Promise.all(
        keys.map(async (key) => {
          if (identifier && !key.parentID) {
            return new Error(`"${identifier}" is required`);
          }

          const where =
            identifier && key.parentID
              ? { [identifier]: key.parentID, deletedAt: null }
              : { deletedAt: null };

          const queryArgs = { where, ...key.getOverrides() };

          return findManyCursorConnection(
            (args) => table.findMany({ ...args, ...queryArgs }),
            () => table.count({ where: queryArgs.where }),
            key.arguments()
          );
        })
      );

      onFetchComplete?.(items.filter(Boolean) as Connection<TPrisma>[]);

      return items;
    },
    { cacheKeyFn: (key) => key.hash() }
  );
}
