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
import type { ActionData } from "../api/auth/login";

export const meta: MetaFunction = () => {
  return {
    title: "Giriş",
  };
};

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";
  const fetcher = useFetcher<ActionData>();

  const fieldErrors = fetcher.data?.errors;

  return (
    <CenteredContainer>
      <fetcher.Form method="post" action="/api/auth/login" noValidate>
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

          <Label htmlFor="password">Parola</Label>
          <Input
            id="password"
            name="password"
            placeholder="super-secret-password"
            type="password"
            aria-errormessage={
              fieldErrors?.password ? "password-error" : undefined
            }
          />
          {fieldErrors?.password ? (
            <ValidationMessage
              error={fieldErrors.password}
              isSubmitting={!!fetcher.submission}
            />
          ) : null}
          <Box>
            <Button type="submit">Giriş yap</Button>
          </Box>
          <input type="hidden" name="redirectTo" value={redirectTo} />
        </GappedBox>
      </fetcher.Form>
    </CenteredContainer>
  );
};

export default Login;
