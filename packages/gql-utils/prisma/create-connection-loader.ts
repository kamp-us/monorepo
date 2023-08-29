import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import DataLoader from "dataloader";

import { type Connection } from "../connection";
import { type ConnectionKey } from "./connection-key";
import { type PrismaModel } from "./types";

export function createPrismaConnectionLoader<TPrisma extends { id: string }>(
  table: PrismaModel<TPrisma>,
  identifier: keyof TPrisma | null,
  onFetchComplete?: (connection: Connection<TPrisma>[]) => void
) {
  return new DataLoader(
    async (keys: readonly ConnectionKey[]) => {
      const items = await Promise.all(
        keys.map(async (key) => {
          if (identifier && !key.parentID) {
            return new Error(`"${identifier as string}" is required`);
          }

          const where =
            identifier && key.parentID
              ? { [identifier]: key.parentID, deletedAt: null }
              : { deletedAt: null };

          const overrides = key.getOverrides();

          const queryArgs = {
            ...overrides,
            // we are making sure that [identifier]: parentID and deletedAt is
            // not overridden
            where: { ...overrides.where, ...where },
          };

          return findManyCursorConnection(
            (args) => table.findMany({ ...args, ...queryArgs }),
            () => table.count({ where: queryArgs.where }),
            key.arguments()
          );
        })
      );

      if (onFetchComplete) {
        const filtered = items.filter(Boolean) as Connection<TPrisma>[];
        onFetchComplete(filtered);
      }

      return items;
    },
    { cacheKeyFn: (key) => key.hash() }
  );
}
