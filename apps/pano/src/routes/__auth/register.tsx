import {
  Box,
  Button,
  CenteredContainer,
  GappedBox,
  Input,
  Label,
  ValidationMessage,
} from "@kampus/ui";
import type { MetaFunction } from "@remix-run/node";
import { useFetcher, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { authenticator } from "~/features/auth/remix-auth-authenticator.server";
import type { ActionData } from "../api/auth/register";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export const meta: MetaFunction = () => {
  return {
    title: "Kayıt",
  };
};

export const Register = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";
  const fetcher = useFetcher<ActionData>();

  const fieldErrors = fetcher.data?.errors;

  return (
    <CenteredContainer>
      <fetcher.Form method="post" action="/api/auth/register" noValidate>
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="username">Kullanıcı Adı</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="iron-man"
            aria-errormessage={
              fieldErrors?.username ? "username-error" : undefined
            }
          />
          {fieldErrors?.username ? (
            <ValidationMessage
              error={fieldErrors.username}
              isSubmitting={!!fetcher.submission}
            />
          ) : null}

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tony-stark@avengers.co"
            aria-errormessage={fieldErrors?.email ? "email-error" : undefined}
          />
          {fieldErrors?.email ? (
            <ValidationMessage
              error={fieldErrors.email}
              isSubmitting={!!fetcher.submission}
            />
          ) : null}
        </GappedBox>
        <Box>
          <Button type="submit">Giriş yap</Button>
        </Box>
        <input type="hidden" name="redirectTo" value={redirectTo} />
      </fetcher.Form>
    </CenteredContainer>
  );
};

export default Register;
