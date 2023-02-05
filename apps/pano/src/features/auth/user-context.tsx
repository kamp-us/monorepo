import type { FC } from "react";
import { createContext, useContext } from "react";
import type { User } from "~/models/user.server";

export const UserContext = createContext<User | null>(null);

export const useUserContext = () => useContext(UserContext);

export const UserContextManager: FC<{ user: User | null }> = ({
  user,
  children,
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
