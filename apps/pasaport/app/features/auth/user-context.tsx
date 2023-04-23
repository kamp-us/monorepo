import type { User } from "@prisma/client";
import type { FC, PropsWithChildren } from "react";
import { createContext } from "react";

export const UserContext = createContext<User | null>(null);

type Props = PropsWithChildren<{ user: User | null }>;

export const UserContextManager: FC<Props> = ({ user, children }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
