import { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

const selectCommentWithOwner = Prisma.validator<Prisma.CommentArgs>()({
  include: {
    owner: true,
  },
});

export type CommentWithOwner = Prisma.CommentGetPayload<
  typeof selectCommentWithOwner
>;

export type Comment = CommentWithOwner;

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
