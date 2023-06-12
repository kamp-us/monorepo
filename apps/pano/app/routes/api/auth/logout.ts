import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/authenticator.server";

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.logout(request, { redirectTo: "/" });
};
