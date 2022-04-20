import { Auth } from "aws-amplify";
import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { Box } from "~/ui-library/layout-components/Box";
import { Label } from "~/ui-library/Label";
import { Input } from "~/ui-library/Input";
import { GappedBox } from "~/ui-library/GappedBox";
import { Button } from "~/ui-library/layout-components/Button";
import { useActionData, useTransition } from "@remix-run/react";
import { ActionFunction } from "remix";
import { json, redirect } from "@remix-run/node";
import { ValidationMessage } from "~/ui-library/ValidationMessage";
import { Form } from "~/ui-library/Form";

const validateUsername = (username: unknown) => {
  if (typeof username !== "string" || username.length < 3) {
    return `Kullanıcı adı en az 3 karakter olmalıdır.`;
  }
};

const validatePassword = (password: unknown) => {
  if (typeof password !== "string" || password.length < 6) {
    return `Şifre en az 6 karakter olmalıdır.`;
  }
};

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    return badRequest({
      formError: "Lütfen kullanıcı adı ve parola alanlarını doldurun.",
    });
  }

  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
    });
  }

  try {
    await Auth.signIn(username, password);
    return redirect("/");
  } catch (error) {
    return badRequest({
      formError: "Kullanıcı adı veya parola yanlış.",
      fieldErrors,
      fields,
    });
  }
};

export const Login = () => {
  const data = useActionData();
  const transition = useTransition();

  return (
    <CenteredContainer>
      <Form method="post">
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="username">Kullanıcı Adı</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="iron-man"
            aria-errormessage={
              data?.fieldErrors?.username ? "username-error" : undefined
            }
          />
          {data?.fieldErrors?.username ? (
            <ValidationMessage
              error={data.fieldErrors.username}
              isSubmitting={transition.state === "submitting"}
            />
          ) : null}

          <Label htmlFor="password">Parola</Label>
          <Input
            id="password"
            name="password"
            placeholder="super-secret-password"
            type="password"
            aria-errormessage={
              data?.fieldErrors?.password ? "password-error" : undefined
            }
          />
          {data?.fieldErrors?.password ? (
            <ValidationMessage
              error={data.fieldErrors.password}
              isSubmitting={transition.state === "submitting"}
            />
          ) : null}
          <Box>
            <Button type="submit">Giriş yap</Button>
          </Box>
          {data?.formError ? (
            <ValidationMessage
              error={data.formError}
              isSubmitting={transition.state === "submitting"}
            />
          ) : null}
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Login;
