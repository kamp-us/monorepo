import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import DataLoader from "dataloader";
import hash from "object-hash";

import { type Clients } from "~/clients/types";
import {
  PanoPost,
  PanoPostsConnection,
  PanoQueryPostArgs,
  PanoQueryPostsArgs,
} from "~/schema/types.generated";

export const createPanoLoaders = (clients: Clients) => {
  return {
    post: createPostLoader(clients),
    posts: createPostsLoader(clients),
  };
};

export type PanoPostLoader = ReturnType<typeof createPostLoader>;
export type PanoPostsLoader = ReturnType<typeof createPostsLoader>;

const createPostLoader = (clients: Clients) =>
  new DataLoader<PanoQueryPostArgs, PanoPost>(async (keys) => {
    return await Promise.all(
      keys.map(async (args) => {
        const post = await clients.prisma.post.findFirst({
          where: { id: args.input.id },
          include: {
            comments: {
              include: {
                owner: true,
                upvotes: {
                  include: {
                    owner: true,
                  },
                },
              },
            },
            owner: true,
          },
        });

        if (!post) {
          return new Error(`Post not found for: ${args.input.id}`);
        }

        return post as PanoPost;
      })
    );
  });

const createPostsLoader = (clients: Clients) =>
  new DataLoader<Partial<PanoQueryPostsArgs>, PanoPostsConnection, string>(
    (keys) => postsLoaderBatchFn(clients, keys),
    {
      cacheKeyFn: (key) => hash(key),
    }
  );

const postsLoaderBatchFn = async (
  clients: Clients,
  keys: readonly Partial<PanoQueryPostsArgs>[]
) => {
  const results: PanoPostsConnection[] = [];

  for (const key of keys) {
    const { before, after, first, last } = key;

    const result = await findManyCursorConnection(
      (args) =>
        clients.prisma.post.findMany({
          ...args,
          include: {
            owner: true,
          },
        }),
      () => clients.prisma.post.count(),
      { before, after, first, last },
      {}
    );

    results.push(result);
  }

  return results;
};
