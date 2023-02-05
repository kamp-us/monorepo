import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "~/features/auth/remix-auth-authenticator.server";

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("OTP", request, {
    successRedirect: "/login",
    failureRedirect: "/login",
  });
};
