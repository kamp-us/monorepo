import type { AuthUser } from "./user-context";

interface Entity {
  owner: string;
}

export const canUserEdit = <T extends Entity>(
  user: AuthUser | null,
  entity?: T | null
): entity is T => {
  return !!user && !!entity && entity.owner === user.username;
};
