import type { User } from "@prisma/client";  

interface Entity {
  owner: {
    id: string;
  };
}

export const canUserEdit = <T extends Entity>(
  user: Pick<User, "id"> | null,
  entity?: T | null
): entity is T => {
  return !!user && !!entity && entity.owner.id === user.id;
};
