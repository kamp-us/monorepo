import type { MetaFunction } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  ValidationMessage,
} from "~/ui-library";
import type { ActionData } from "../api/auth/login";

export const meta: MetaFunction = () => {
  return {
    title: "Giriş",
  };
};

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";
  const actionData = useActionData<ActionData>();

  const fieldErrors = actionData?.errors;

  return (
    <CenteredContainer>
      <Form method="post" action="/api/auth/login" noValidate>
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
              isSubmitting={false}
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
              isSubmitting={false}
            />
          ) : null}
        </GappedBox>
        <Box>
          <Button type="submit">Giriş yap</Button>
        </Box>
        <input type="hidden" name="redirectTo" value={redirectTo} />
      </Form>
    </CenteredContainer>
  );
};

export default Login;
