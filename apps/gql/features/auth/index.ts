import { type Session } from "@kampus/next-auth";

import { env } from "../../env";

export const getSession = async (request: Request): Promise<Session | null> => {
  const headers = new Headers(request.headers);
  try {
    const cookie = headers.get("cookie");
    const session = await fetch(`${env.NEXTAUTH_URL}/session`, {
      method: "GET",
      headers: {
        cookie: cookie || "",
      },
    }).then((res) => res.json());
    return session satisfies Session;
  } catch (e) {
    // handle error for session request fails
    return null;
  }
};
