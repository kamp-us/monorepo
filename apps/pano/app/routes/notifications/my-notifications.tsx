import { Notification } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { requireUser } from "~/authenticator.server";
import { NotificationDropdown } from "~/features/notification-dropdown/NotificationDropdown";
import { getMyNotifications } from "~/models/notification.server";

type LoaderData = {
  notifications: Notification[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request);
  const notifications = await getMyNotifications(user.id);
  return json<LoaderData>({ notifications });
};
