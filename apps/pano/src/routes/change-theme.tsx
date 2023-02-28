import { ActionFunction } from "@remix-run/node";
import { useUserContext } from "~/features/auth/user-context";
import { updateTheme } from "~/models/user.server";
import { requireUser } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const user = await requireUser(request);

  const theme = formData.get("theme");

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
