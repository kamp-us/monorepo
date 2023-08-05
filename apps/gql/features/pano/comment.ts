import { type Clients } from "~/clients";

interface CreatePanoCommentArgs {
  userID: string;
  content: string;
  postID: string;
  parentID: string | undefined;
}

export function createPanoCommentActions({ prisma }: Clients) {
  const create = (args: CreatePanoCommentArgs) => {
    return prisma.comment.create({
      data: {
        owner: { connect: { id: args.userID } },
        content: args.content,
        post: {
          connect: { id: args.postID },
        },
        parent: args.parentID
          ? {
              connect: { id: args.parentID },
            }
          : undefined,
      },
    });
  };

  return {
    create,
  };
}
