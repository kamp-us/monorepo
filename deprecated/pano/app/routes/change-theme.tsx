import type { ActionFunction } from "@remix-run/node";
import { requireUser } from "~/authenticator.server";
import type { UserPreference } from "~/models/user.server";
import { updateTheme } from "~/models/user.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const user = await requireUser(request);

  const theme = formData.get("theme") as UserPreference["theme"];

  try {
    await updateTheme(user, theme);
    return {
      status: 200,
      json: { message: "Theme changed" },
    };
  } catch (error: any) {
    return {
      status: 500,
      json: { error: error.message },
    };
  }
};
