import { Session } from "next-auth";
import { getServerSession as $getServerSession } from "next-auth/next";

import { authOptions } from "./authOptions";

export const getServerSession = (): Promise<
  | (Session & {
      user: {
        providers: {
          name: string;
          connected: boolean;
        }[];
      };
    })
  | null
> => {
  return $getServerSession(authOptions);
};
