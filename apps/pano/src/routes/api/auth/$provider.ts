import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { authenticator } from "~/features/auth/remix-auth-authenticator.server";

export async function loader() {
  return redirect("/login");
}

export async function action({ request, params }: ActionArgs) {
  invariant(params.provider, "Provider is not found which is pretty weird");
  return authenticator.authenticate(params.provider, request);
}
