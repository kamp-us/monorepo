import { Prisma } from "@prisma/client";
import slugify from "slugify";
import { prisma } from "~/db.server";
import { getSitename } from "~/features/url/get-sitename";
import type { Comment } from "~/models/comment.server";
import { normalizeComment } from "~/models/comment.server";

const selectPostWithOwner = Prisma.validator<Prisma.PostArgs>()({
  include: {
    owner: true,
  },
});

export type PostWithOwner = Prisma.PostGetPayload<typeof selectPostWithOwner>;

const selectPostWithUpvote = Prisma.validator<Prisma.PostArgs>()({
  include: {
    upvotes: true,
  },
});

export type PostWithUpvotes = Prisma.PostGetPayload<
  typeof selectPostWithUpvote
>;

const selectPostWithCommentCount = Prisma.validator<Prisma.PostArgs>()({
  include: {
    _count: {
      select: { comments: true },
    },
  },
});

export type _PostWithCommentCount = Prisma.PostGetPayload<
  typeof selectPostWithCommentCount
>;

const selectPostWithComment = Prisma.validator<Prisma.PostArgs>()({
  include: {
    comments: {
      include: {
        owner: true,
        upvotes: true,
      },
    },
  },
});

export type PostWithComments = Prisma.PostGetPayload<
  typeof selectPostWithComment
>;

export type Post = PostWithOwner &
  PostWithUpvotes &
  PostWithComments &
  _PostWithCommentCount;

export type PostWithCommentCount = PostWithOwner &
  PostWithUpvotes &
  _PostWithCommentCount;

export const getAllPosts = () => {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      upvotes: true,
      owner: true,
      _count: {
        select: { comments: true },
      },
    },
  });
};

export const getActivePosts = async () => {
  const data = await prisma.post.findMany({
    include: {
      upvotes: true,
      owner: true,
      comments: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          owner: true,
          upvotes: true,
        },
      },
      _count: {
        select: { comments: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const activePosts = sortLastCommentedPosts(data);
  return activePosts;
};

export const getMostCommentedPosts = () => {
  return prisma.post.findMany({
    orderBy: {
      comments: {
        _count: "desc",
      },
    },
    include: {
      upvotes: true,
      owner: true,
      _count: {
        select: { comments: true },
      },
    },
  });
};

export const getMostUpvotedPosts = () => {
  return prisma.post.findMany({
    orderBy: {
      upvotes: {
        _count: "desc",
      },
    },
    include: {
      upvotes: true,
      owner: true,
      _count: {
        select: { comments: true },
      },
    },
  });
};

export const getPostById = (id: string) => {
  return prisma.post.findFirst({
    where: { id },
    include: {
      upvotes: true,
      _count: {
        select: { comments: true },
      },
      owner: true,
    },
  });
};

export const getPostBySlugAndId = async (slug: string, id: string) => {
  const response = await prisma.post.findFirst({
    where: { slug, id },
    include: {
      upvotes: true,
      comments: {
        include: {
          owner: true,
          upvotes: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      _count: {
        select: { comments: true },
      },
      owner: true,
    },
  });

  response?.comments.map((comment: Comment) => normalizeComment(comment));

  return response;
};

export const getPostsBySite = (site: string) => {
  return prisma.post.findMany({
    where: { site },
    include: {
      upvotes: true,
      _count: {
        select: { comments: true },
      },
      owner: true,
    },
  });
};

export const searchPosts = (query: string) => {
  return prisma.post.findMany({
    where: {
      OR: [
        { title: { contains: query } },
        { site: { contains: query } },
        { content: { contains: query } },
      ],
    },
    include: {
      upvotes: true,
      _count: {
        select: { comments: true },
      },
      owner: true,
    },
  });
};

export const createPost = (
  title: string,
  userID: string,
  url: string | null,
  content: string | null
) => {
  let site;
  if (url) {
    const postURL = new URL(url);
    site = getSitename(postURL);
  }

  const slug = slugify(title);

  return prisma.post.create({
    data: {
      title,
      url,
      site,
      slug,
      content,
      owner: {
        connect: {
          id: userID,
        },
      },
    },
  });
};

export const deletePost = (id: string) => {
  return prisma.post.delete({
    where: { id },
  });
};

export const editPost = (
  id: string,
  title: string,
  url: string | null,
  content: string | null
) => {
  let site;
  if (url) {
    const postURL = new URL(url);
    site = getSitename(postURL);
  }
  const slug = slugify(title);

  return prisma.post.update({
    where: { id },
    data: {
      title,
      url,
      site,
      slug,
      content,
    },
  });
};

export const isPostUpvoted = (post: Post, userID: string) => {
  return post.upvotes.some(
    (upvote: { userID: string }) => upvote.userID === userID
  );
};

export const createUpvote = (postID: string, userID: string) => {
  return prisma.upvote.create({
    data: {
      postID,
      userID,
    },
  });
};

export const deleteUpvote = (postID: string, userID: string) => {
  return prisma.upvote.deleteMany({
    where: {
      postID,
      userID,
    },
  });
};

const sortLastCommentedPosts = (posts: Post[]) => {
  const lastCommentedPosts = posts.sort((a, b) => {
    const lastCommentA = a.comments[a.comments.length - 1];
    const lastCommentB = b.comments[b.comments.length - 1];

    if (!lastCommentA || !lastCommentB) return 0;

    return lastCommentB.createdAt.getTime() - lastCommentA.createdAt.getTime();
  });
  return lastCommentedPosts;
};
