import DataLoader from "dataloader";

import { type PrismaModel } from "./types";

/**
 * Creates a new DataLoader instance that's connected to a prisma model.
 *
 * @example
 * ```typescript
 * import { createPrismaDataLoader } from "@kampus/gql-utils";
 * import { prisma } from "@kampus/prisma";
 * // in the end this function returns a DataLoader instance.
 * import DataLoader from "dataloader";
 *
 * // create a loader that can be used to fetch users by their ids
 * const byID = createPrismaDataLoader(prisma.user, "id", (users) => {
 *   for (const user of users) {
 *     byUsername.prime(user.username, user);
 *   }
 * });
 *
 * // create a loader that can be used to fetch users by their usernames
 * const byUsername = createPrismaDataLoader(prisma.user, "username", (users) => {
 *   for (const user of users) {
 *     byID.prime(user.id, user);
 *   }
 * });
 *
 * const userByID = byID.load("some-id");
 * const userByUsername = byUsername.load("testuser");
 * ```
 *
 * @param model - prisma model
 * @param identifier - the field that's the keys are gonna match against.
 * @param onFetchComplete - an optional function that's gonna be called after prisma fetch is complete.
 * @returns a new DataLoader instance that's ready to load data db using prisma model
 */
export function createPrismaLoader<TModel extends Record<string, unknown>>(
  model: PrismaModel<TModel>,
  identifier: keyof TModel,
  onFetchComplete?: (items: TModel[]) => void
) {
  return new DataLoader<string, TModel>(async (keys: readonly string[]) => {
    const items = await model.findMany({
      where: {
        [identifier]: { in: keys as string[] },
        deletedAt: null,
      },
    });

    onFetchComplete?.(items);

    return keys.map((key) => {
      return (
        items.find((item) => item[identifier] === key) ??
        new Error(`not found: ${identifier as string}: ${key}`)
      );
    });
  });
}
