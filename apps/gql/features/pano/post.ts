import { type Clients } from "~/clients";
import { getSitename } from "./utils/get-sitename";

export function createPanoActions(clients: Clients) {
  return {
    post: createPanoPostActions(clients),
  };
}

interface CreatePanoPostArgs {
  title: string;
  userID: string;
  url: string | null;
  content: string | null;
}

interface UpdatePanoPostArgs {
  title: string;
  url: string | null;
  content: string | null;
}

function createPanoPostActions({ prisma }: Clients) {
  const create = (args: CreatePanoPostArgs) => {
    return prisma.post.create({
      data: {
        title: args.title,
        url: args.url,
        site: getSitename(args.url),
        content: args.content,
        owner: { connect: { id: args.userID } },
      },
    });
  };

  const update = (userID: string, args: UpdatePanoPostArgs) => {
    return prisma.post.update({
      where: { id: userID },
      data: {
        title: args.title,
        url: args.url,
        site: getSitename(args.url),
        content: args.content,
      },
    });
  };

  return {
    create,
    update,
  };
}
