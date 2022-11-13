import { Prisma } from "@prisma/client";
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

export type CommentWithOwner = Prisma.CommentGetPayload<
  typeof selectCommentWithOwner
>;

export type CommentWithUpvotes = Prisma.CommentGetPayload<
  typeof selectCommentWithUpvotes
>;

export type Comment = CommentWithOwner & CommentWithUpvotes;

export const createComment = (
  content: string,
  postID: string,
  userID: string,
  parentID?: string
) => {
  return prisma.comment.create({
    data: {
      content,
      post: { connect: { id: postID } },
      owner: { connect: { id: userID } },
      parent: parentID ? { connect: { id: parentID } } : undefined,
    },
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
