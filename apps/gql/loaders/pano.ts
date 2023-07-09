import DataLoader from "dataloader";
import hash from "object-hash";

import { applyPagination, generatePageInfo, validateCursorArgs } from "~/features/relay/pagination";
import { type Clients } from "~/clients/types";
import {
  PanoPost,
  PanoPostsConnection,
  PanoPostWithComment,
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
  new DataLoader<PanoQueryPostArgs, PanoPostWithComment>(async (keys) => {
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

        return post as PanoPostWithComment;
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

    validateCursorArgs<PanoPost>({ before, after, first, last });

    const posts = (await clients.prisma.post.findMany({
      take: before ? -(Number(last) + 1) : after ? Number(first) + 1 : first || -Number(last),
      skip: before ? 1 : undefined,
      cursor: after
        ? {
            id: after,
          }
        : undefined,
      include: {
        owner: true,
      },
    })) as PanoPost[];

    const paginatedPosts = applyPagination<PanoPost>({ data: posts, before, after, first, last });

    const edges = paginatedPosts.map((post) => ({ cursor: post.id, node: post }));

    const totalCount = await clients.prisma.post.count();

    const result = {
      edges,
      pageInfo: generatePageInfo({ data: posts, before, after, first, last }),
      totalCount,
    };

    results.push(result);
  }

  return results;
};
