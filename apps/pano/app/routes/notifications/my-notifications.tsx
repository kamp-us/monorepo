import { Notification } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { requireUser } from "~/authenticator.server";
import { getMyNotifications } from "~/models/notification.server";

type LoaderData = {
  notifications: Notification[];
};

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const user = await requireUser(request);
    const notifications = await getMyNotifications(user.id);
    return json<LoaderData>({ notifications });
  } catch (e) {
    return json<LoaderData>({ notifications: [] });
  }
};
