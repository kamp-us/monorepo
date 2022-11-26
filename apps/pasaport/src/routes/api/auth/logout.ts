import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/session.server";
import { safeRedirect } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const url = new URL(request.url);
  const formData = await request.formData();

  const redirectTo = safeRedirect(
    url.searchParams.get("redirectTo") ?? formData.get("redirectTo"),
    "/"
  );

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await logout(request),
    },
  });
};
