import { type EmailConfig, type EmailUserConfig } from "next-auth/providers";

import { sendEmail } from "@kampus/email";

export type PostaciConfig = EmailConfig;

export type PostaciUserConfig = EmailUserConfig;

export const PostaciProvider = (options: PostaciUserConfig = {}): PostaciConfig => {
  const from = "kamp.us no-reply <no-reply@kamp.us>";

  return {
    id: "postaci",
    name: "Postaci",
    type: "email",
    server: "",
    from,
    async sendVerificationRequest(props) {
      await sendEmail(
        {
          email: { from, to: props.identifier, subject: "kamp.us'e giriş yap" },
          kampusEmail: { type: "magic-link", props: { url: props.url } },
        },
        { baseUrl: "http://localhost:3001" }
      );
    },
    options,
  } satisfies PostaciConfig;
};
