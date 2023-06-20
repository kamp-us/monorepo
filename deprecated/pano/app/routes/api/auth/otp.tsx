import type { ActionArgs } from "@remix-run/node";
import { authenticator } from "~/authenticator.server";

export const action = async ({ request }: ActionArgs) => {
  return await authenticator.authenticate("otp", request, {
    successRedirect: "/login",
    failureRedirect: "/login",
  });
};
