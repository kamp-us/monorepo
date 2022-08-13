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
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useSearchParams } from "@remix-run/react";
import { safeRedirect } from "~/utils";
import { verifyLogin } from "~/models/user.server";
import { createUserSession } from "~/session.server";

interface ActionData {
  errors?: {
    username?: string;
    password?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (typeof username !== "string" || username.length < 3) {
    return json<ActionData>({
      errors: {
        username: "Kullanıcı adı en az 3 karakter olmalıdır.",
      },
    });
  }

  if (typeof password !== "string" || password.length < 6) {
    return json<ActionData>({
      errors: {
        password: "Şifre en az 6 karakter olmalıdır.",
      },
    });
  }

  const user = await verifyLogin(username, password);
  if (!user) {
    return json<ActionData>({
      errors: {
        username: "Kullanıcı adı veya şifre hatalı.",
      },
    });
  }

  return createUserSession({
    request,
    userID: user.id,
    redirectTo,
    remember: true,
  });
};

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
      <Form method="post" noValidate>
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
