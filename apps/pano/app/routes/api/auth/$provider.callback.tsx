import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { authenticator, Strategies } from "~/authenticator.server";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.provider, "Provider is not found which is pretty weird");
  const provider = Strategies.parse(params.provider);
  return authenticator.authenticate(provider, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}
