import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession as $getServerSession } from "next-auth/next";

import { authOptions } from "./authOptions";

export const getServerSession = (req?: NextApiRequest, res?: NextApiResponse) => {
  if (req && res) {
    return $getServerSession(req, res, authOptions);
  }

  return $getServerSession(authOptions);
};
