import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { authenticator, validateProvider } from "~/authenticator.server";

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.provider, "Provider is not found which is pretty weird");
  const provider = validateProvider(params.provider);
  return await authenticator.authenticate(provider, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
}
