import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUser } from "~/authenticator.server";
import type { MyNotification } from "~/models/notification.server";
import { readMyNotifications } from "~/models/notification.server";
import { getMyNotifications } from "~/models/notification.server";

type LoaderData = {
  notifications: MyNotification[];
};

type ActionData = {
  notifications: MyNotification[];
};

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const user = await requireUser(request);
    const notifications = await getMyNotifications(user.id, 1);
    return json<LoaderData>({ notifications });
  } catch (e) {
    return json<LoaderData>({ notifications: [] });
  }
};

export const action: ActionFunction = async ({ request }) => {
  try {
    const user = await requireUser(request);
    const notifications = await readMyNotifications(user.id);
    return json<ActionData>({ notifications });
  } catch (e) {
    return json<ActionData>({ notifications: [] });
  }
};
