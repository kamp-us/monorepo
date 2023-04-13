import { Button, Form, OAuthProviderLogo } from "@kampus/ui";
import React, { FC } from "react";
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
          display: "flex",
          alignContent: "center",
          gap: "0.5rem",
          "@media (max-width: 400px)": { width: "100%" },
        }}
      >
        <OAuthProviderLogo provider={provider} height={20} />
        {provider.slice(0, 1).toUpperCase() + provider.slice(1)} ile giriş yap
      </Button>
    </Form>
  );
};
