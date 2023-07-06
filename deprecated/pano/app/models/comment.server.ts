import { Prisma } from "@kampus-db/pano-prisma";
import { prisma } from "~/db.server";

const selectCommentWithOwner = Prisma.validator<Prisma.CommentArgs>()({
  include: {
    owner: true,
  },
});

const selectCommentWithUpvotes = Prisma.validator<Prisma.CommentArgs>()({
  include: {
    upvotes: true,
  },
});

export type CommentWithOwner = Prisma.CommentGetPayload<typeof selectCommentWithOwner>;

export type CommentWithUpvotes = Prisma.CommentGetPayload<typeof selectCommentWithUpvotes>;

export type Comment = CommentWithOwner & CommentWithUpvotes;

export const normalizeComment = (model: Comment) => {
  if (model.deletedAt !== null) {
    model.content = "[deleted]";
  }
  return model;
};

export const createComment = (
  content: string,
  postID: string,
  userID: string,
  parentID?: string,
  deletedAt?: Date | null
) => {
  return prisma.comment.create({
    data: {
      content,
      post: { connect: { id: postID } },
      owner: { connect: { id: userID } },
      parent: parentID ? { connect: { id: parentID } } : undefined,
      deletedAt: deletedAt,
    },
  });
};

export const deleteComment = (id: string) => {
  return prisma.comment.delete({
    where: { id },
  });
};

export const editComment = (id: string, content: string) => {
  return prisma.comment.update({
    where: { id },
    data: { content },
  });
};

export const deleteUpvote = (commentID: string, userID: string) => {
  return prisma.commentUpvote.deleteMany({
    where: {
      commentID,
      userID,
    },
  });
};

export const createUpvote = (commentID: string, userID: string) => {
  return prisma.commentUpvote.create({
    data: {
      commentID,
      userID,
    },
  });
};
