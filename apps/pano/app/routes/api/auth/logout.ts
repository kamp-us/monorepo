import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await logout(request),
    },
  });
};
