import type { DataFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/authenticator.server";

export async function loader({ request }: DataFunctionArgs) {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  if (!user) {
    await authenticator.authenticate("otp", request, {
      successRedirect: "/",
      failureRedirect: "/login",
    });
  }
}
