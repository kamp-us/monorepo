import { type Clients } from "~/clients";

interface CreatePanoCommentArgs {
  userID: string;
  content: string;
  postID: string;
  parentID: string | undefined;
}

interface UpdatePanoCommentArgs {
  content: string;
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

  const update = (id: string, args: UpdatePanoCommentArgs) => {
    return prisma.comment.update({
      where: { id },
      data: {
        content: args.content,
      },
    });
  };

  const remove = (id: string) => {
    return prisma.comment.delete({ where: { id } });
  };

  return {
    create,
    update,
    remove,
  };
}
