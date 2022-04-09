import React from "react";

export interface AuthUser {
  username: string;
  attributes: {
    email: string;
  };
}

export const UserContext = React.createContext<AuthUser | null>(null);

export const useUserContext = () => React.useContext(UserContext);
