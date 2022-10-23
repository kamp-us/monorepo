import { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";
import { getSitename } from "~/features/url/get-sitename";
import { slugify } from "~/utils";

const selectPostWithComment = Prisma.validator<Prisma.PostArgs>()({
  include: {
    comments: {
      include: {
        owner: true,
      },
    },
  },
});

export type PostWithComments = Prisma.PostGetPayload<
  typeof selectPostWithComment
>;

const selectPostWithUpvote = Prisma.validator<Prisma.PostArgs>()({
  include: {
    upvotes: true,
  },
});

export type PostWithUpvotes = Prisma.PostGetPayload<
  typeof selectPostWithUpvote
>;

const selectPostWithOwner = Prisma.validator<Prisma.PostArgs>()({
  include: {
    owner: true,
  },
});

export type PostWithOwner = Prisma.PostGetPayload<typeof selectPostWithOwner>;

export type Post = PostWithComments & PostWithUpvotes & PostWithOwner;

export const getAllPosts = () => {
  return prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      upvotes: true,
      owner: true,
      comments: {
        include: {
          owner: true,
        },
      },
    },
  });
};

export const getPostById = (id: string) => {
  return prisma.post.findFirst({
    where: { id },
    include: {
      upvotes: true,
      comments: {
        include: {
          owner: true,
        },
      },
      owner: true,
    },
  });
};

export const getPostBySlug = (slug: string) => {
  return prisma.post.findFirst({
    where: { slug },
    include: {
      upvotes: true,
      comments: {
        include: {
          owner: true,
        },
      },
      owner: true,
    },
  });
};

export const getPostIdBySlug = (slug: string) => {
  return prisma.post.findFirst({
    where: { slug },
    select: {
      id: true,
    },
  });
};

export const getPostsBySite = (site: string) => {
  return prisma.post.findMany({
    where: { site },
    include: {
      upvotes: true,
      comments: {
        include: {
          owner: true,
        },
      },
      owner: true,
    },
  });
};

export const searchPosts = (query: string) => {
  return prisma.post.findMany({
    where: {
      OR: [{ title: { contains: query } }, { site: { contains: query } }],
    },
    include: {
      upvotes: true,
      comments: {
        include: {
          owner: true,
        },
      },
      owner: true,
    },
  });
};

export const createPost = (title: string, url: string, userID: string) => {
  const postURL = new URL(url);
  const site = getSitename(postURL);
  const slug = slugify(title);
  return prisma.post.create({
    data: {
      title,
      url,
      site,
      slug,
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

export const editPost = (id: string, title: string, url: string) => {
  const postURL = new URL(url);
  const site = getSitename(postURL);
  const slug = slugify(title);
  return prisma.post.update({
    where: { id },
    data: {
      title,
      url,
      site,
      slug,
    },
  });
};

export const isPostUpvoted = (post: Post, userID: string) => {
  return post.upvotes.some((upvote) => upvote.userID === userID);
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
