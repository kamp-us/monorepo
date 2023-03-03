import type { User } from "@prisma/client";
import type { FC, PropsWithChildren } from "react";
import { createContext, useContext } from "react";

// we are removing this
export interface AuthUser {
  username: string;
  attributes: {
    email: string;
  };
}

export const UserContext = createContext<User | null>(null);

export const useUserContext = () => useContext(UserContext);

type Props = PropsWithChildren<{ user: User | null }>;

export const UserContextManager: FC<Props> = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
