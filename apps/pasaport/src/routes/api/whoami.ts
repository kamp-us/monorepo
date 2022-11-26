import { json, LoaderFunction } from "@remix-run/node";
import { getUser } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  return json(await getUser(request));
};
