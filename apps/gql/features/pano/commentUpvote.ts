import { type Clients } from "~/clients";

interface CreateCommentUpvoteArgs {
  commentID: string;
  userID: string;
}

interface RemoveCommentUpvoteArgs {
  commentID: string;
  userID: string;
}

export function createCommentUpvoteActions({ prisma }: Clients) {
  const create = (args: CreateCommentUpvoteArgs) => {
    return prisma.commentUpvote.create({
      data: {
        comment: { connect: { id: args.commentID } },
        owner: { connect: { id: args.userID } },
      },
    });
  };

  const remove = (args: RemoveCommentUpvoteArgs) => {
    return prisma.commentUpvote.delete({
      where: {
        commentID_userID: {
          commentID: args.commentID,
          userID: args.userID,
        },
      },
    });
  };

  return { create, remove };
}
