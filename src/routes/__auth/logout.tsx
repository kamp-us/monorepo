import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Auth } from "aws-amplify";

export const action: ActionFunction = async () => {
  await Auth.signOut();
  return redirect("/");
};

export const loader: LoaderFunction = async () => {
  return redirect("/");
};
