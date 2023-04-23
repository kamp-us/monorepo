import { Button, Form, OAuthProviderLogo } from "@kampus/ui";
import { FC } from "react";
import { strategies } from "../authenticator";

type Props = {
  provider: Exclude<keyof typeof strategies, "otp" | "user-pass">;
};

export const OAuthLoginForm: FC<Props> = ({ provider }) => {
  return (
    <Form method="post" action={`/api/auth/${provider}`} noValidate>
      <Button
        size="2"
        css={{
          width: "100%",
          "@md": { width: "auto" },
          display: "flex",
          alignContent: "center",
          gap: "0.5rem",
        }}
      >
        <OAuthProviderLogo provider={provider} height={20} />
        {provider.slice(0, 1).toUpperCase() + provider.slice(1)} ile giriş yap
      </Button>
    </Form>
  );
};
