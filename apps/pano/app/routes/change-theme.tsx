import { Theme } from "@prisma/client";
import { ActionArgs } from "@remix-run/node";
import { updateTheme } from "~/models/user.server";
import { requireUser } from "~/session.server";

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const user = await requireUser(request);

  const theme = formData.get("theme") as Theme;

  // TODO: as theme or if not theme, return error?

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
