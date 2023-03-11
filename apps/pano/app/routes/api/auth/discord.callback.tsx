// app/routes/auth/discord.callback.tsx
import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/authenticator.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("discord", request, {
    successRedirect: "/login",
    failureRedirect: "/login",
  });
};
