interface Entity {
  owner: {
    id: string;
  };
}

interface User {
  id: string;
}

export const canUserEdit = <T extends Entity>(
  user: User | null,
  entity?: T | null
): entity is T => {
  return !!user && !!entity && entity.owner.id === user.id;
};
