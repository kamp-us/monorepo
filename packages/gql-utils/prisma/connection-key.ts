import hash from "object-hash";

import { type ConnectionArguments } from "@kampus/gql-utils/connection";

/**
 * Represents a key to load a graphql connection object.
 * We need this abstraction since [`DataLoader`](https://github.com/graphql/dataloader-js)
 * accepts single argument, we need to represent complex keys, with an object.
 */
export class ConnectionKey {
  /**
   * This is useful for cases where we want to fetch "list of X belogs to Y"
   * It's going to be used as value for connection loader's "identifier" when
   * fetching the connection. Set it to null if you are using this key to
   * fetch top level connections (e.g: PanoQuery.posts)
   *
   * @example
   * ```typescript
   * const postsByUserID = createPrismaConnectionLoader(prisma.post, "userID")
   * const userPosts = await postsByUserID.load(new ConnectionKey("test-user-id"))
   *
   * // this loader will not use the "parentID" since its "identifier" is null
   * // Use a ConnectionKey without a "parentID" to fetch from this loader
   * const allPosts = createPrismaConnectionLoader(prisma.post, null)
   * const posts = allPosts.load(new ConnectionKey(null))
   * ```
   */
  public readonly parentID: string | null;

  /**
   * Arguments to fetch resources using relay pagination.
   *
   * @example
   * ```typescript
   * const postsByUserID = createPrismaConnectionLoader(prisma.post, "userID")
   * const key = new ConnectionKey("test-user-id", { first: 10, after: "other-user-id" })
   * const userPosts = await postsByUserID.load(key)
   * ```
   */
  public readonly args: Required<ConnectionArguments> | null;

  constructor(parentID?: string | null, args?: ConnectionArguments | null) {
    this.parentID = parentID ?? null;
    this.args = {
      before: args?.before ?? null,
      after: args?.after ?? null,
      first: args?.first ?? null,
      last: args?.last ?? null,
    };
  }

  /**
   * @returns arguments to be used by prisma query.
   */
  arguments() {
    return this.args ?? undefined;
  }

  /**
   * @returns a deterministic hash that can be used as a cache key for
   * `DataLoader` instances.
   */
  hash() {
    return hash({ parentID: this.parentID, args: this.args });
  }
}
