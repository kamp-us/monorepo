import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { authenticator } from "~/features/auth/remix-auth-authenticator.server";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.provider, "Provider is not found which is pretty weird");
  return authenticator.authenticate(params.provider, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}
