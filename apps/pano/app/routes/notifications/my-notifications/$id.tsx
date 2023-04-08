import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUser } from "~/authenticator.server";
import type { MyNotification } from "~/models/notification.server";
import { readMyNotification } from "~/models/notification.server";

export type ActionData = {
  notifications: MyNotification[];
};

export const action: ActionFunction = async ({ request, params }) => {
  if (!params.id) return null;
  try {
    const user = await requireUser(request);
    const notifications = await readMyNotification(user.id, params.id);
    return json<ActionData>({ notifications });
  } catch (e) {
    return json<ActionData>({ notifications: [] });
  }
};
