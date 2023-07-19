import { type User as PrismaUser } from "@kampus/prisma";

import { type Clients } from "~/clients";
import { type User } from "~/schema/types.generated";
import { createPrismaLoader } from "./utils/prisma-data-loader";

export const transformUser = (user: PrismaUser): User => ({
  id: user.id,
  username: user.username,
  panoPosts: null,
});

export type UserLoaders = ReturnType<typeof createUserLoader>;

export const createUserLoader = ({ prisma }: Clients) => {
  const byID = createPrismaLoader(prisma.user, "id", (users) => {
    for (const user of users) {
      byUsername.prime(user.username, user);
    }
  });

  const byUsername = createPrismaLoader(prisma.user, "username", (users) => {
    for (const user of users) {
      byID.prime(user.id, user);
    }
  });

  return {
    byID,
    byUsername,
  };
};
