import DataLoader from "dataloader";

import { type ConnectionKey } from "./connection-key";
import { type PrismaModel } from "./types";

export function createPrismaCountLoader<TPrisma extends { id: string }>(
  table: PrismaModel<TPrisma>,
  identifier: keyof TPrisma
) {
  return new DataLoader(async (keys: readonly ConnectionKey[]) => {
    const counts = await Promise.all(
      keys.map((key) => {
        const where = { [identifier]: key.parentID, deletedAt: null };

        return table.count({ where });
      })
    );

    return counts;
  });
}
