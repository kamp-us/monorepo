import { Authenticator } from "remix-auth";
import { KampusAuthenticator } from "./KampusAuthenticator";
import { strategies } from "./strategies";
import type { User } from "~/models/user.server";
import { sessionStorage } from "~/session.server";

export const authenticator = new KampusAuthenticator<
  typeof strategies,
  keyof typeof strategies,
  User
>({
  strategies,
  authenticator: new Authenticator(sessionStorage),
});
