import type { User } from "@kampus-db/pano-prisma";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

export const UserContext = createContext<User | null>(null);

export const useUserContext = () => useContext(UserContext);

type Props = PropsWithChildren<{ user: User | null }>;

export const UserContextManager: FC<Props> = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
