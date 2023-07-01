import { getServerSession as $getServerSession } from "next-auth/next";

import { authOptions } from "./authOptions";

export const getServerSession = () => {
  return $getServerSession(authOptions);
};