import { ActionFunction, redirect } from "@remix-run/node";
import { logout } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await logout(request),
    },
  });
};
