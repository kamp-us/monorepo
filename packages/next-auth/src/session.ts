import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession as $getServerSession } from "next-auth";

import { authOptions } from "./authOptions";

type GetServerSessionContext =
  | {
    req: GetServerSidePropsContext["req"];
    res: GetServerSidePropsContext["res"];
  }
  | { req: NextApiRequest; res: NextApiResponse };

export const getServerSession = (ctx: GetServerSessionContext) => {
  return $getServerSession(ctx.req, ctx.res, authOptions);
};