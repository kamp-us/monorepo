import { type Clients } from "~/clients";

interface CreatePostUpvoteArgs {
  postID: string;
  userID: string;
}

interface RemovePostUpvoteArgs {
  postID: string;
  userID: string;
}

export function createPostUpvoteActions({ prisma }: Clients) {
  const create = (args: CreatePostUpvoteArgs) => {
    return prisma.upvote.create({
      data: {
        post: { connect: { id: args.postID } },
        owner: { connect: { id: args.userID } },
      },
    });
  };

  const remove = (args: RemovePostUpvoteArgs) => {
    return prisma.upvote.delete({
      where: {
        postID_userID: {
          postID: args.postID,
          userID: args.userID,
        },
      },
    });
  };

  return { create, remove };
}
