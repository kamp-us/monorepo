import { CenteredContainer } from "~/ui-library/layout-components/CenteredContainer";
import { Form } from "~/ui-library/Form";
import { GappedBox } from "~/ui-library/GappedBox";
import { Label } from "~/ui-library/Label";
import { Text } from "~/ui-library/Text";
import { Input } from "~/ui-library/Input";
import { ValidationMessage } from "~/ui-library/ValidationMessage";
import { Box } from "~/ui-library/layout-components/Box";
import { Button } from "~/ui-library/layout-components/Button";
import { useActionData, useTransition } from "@remix-run/react";
import { ActionFunction, useLoaderData } from "remix";
import { json, LoaderFunction, redirect } from "@remix-run/node";
import { Auth } from "aws-amplify";
import { AuthUser } from "~/features/auth/user-context";
import { fetchUser } from "~/features/auth/useFetchUser";
import { useEffect, useRef } from "react";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    oldPassword: string | undefined;
    newPassword: string | undefined;
  };
  fields?: {
    oldPassword: string;
    newPassword: string;
  };
};
const badRequest = (data: ActionData) => json(data, { status: 400 });

const validatePassword = (password: unknown) => {
  if (typeof password !== "string" || password.length < 6) {
    return `Şifre en az 6 karakter olmalıdır.`;
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const oldPassword = formData.get("oldPassword");
  const newPassword = formData.get("newPassword");

  let user: AuthUser | null = null;
  try {
    user = await fetchUser(Auth);
  } catch {
    user = null;
  }

  if (typeof oldPassword !== "string" || typeof newPassword !== "string") {
    return badRequest({
      formError: "Lütfen eski parola ve yeni parola alanlarını doldurun.",
    });
  }

  const fields = { oldPassword, newPassword };
  const fieldErrors = {
    oldPassword: validatePassword(oldPassword),
    newPassword: validatePassword(newPassword),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
    });
  }

  try {
    await Auth.changePassword(user, oldPassword, newPassword);
    return json({
      message: "Şifreniz başarıyla değiştirildi.",
    });
  } catch (e) {
    return badRequest({
      formError: "Yeni parolada veya eski parolada bir hata var.",
      fieldErrors,
      fields,
    });
  }
};

export const loader: LoaderFunction = async () => {
  const user = await fetchUser(Auth);
  return json({
    user,
  });
};

const Settings = () => {
  const loaderData = useLoaderData();
  const username = loaderData?.user?.username;
  const email = loaderData?.user?.attributes?.email;

  return (
    <CenteredContainer>
      <GappedBox
        css={{ flexDirection: "column", alignItems: "flex-end", marginTop: 20 }}
      >
        <Text>{username}</Text>
        <Text>{email}</Text>
      </GappedBox>
      <GappedBox css={{ flexDirection: "column", marginBottom: 20 }}>
        <Text
          size="5"
          css={{
            borderBottom: "1px $gray6 solid",
            paddingBottom: 10,
          }}
        >
          Parola
        </Text>
        <PasswordResetForm />
      </GappedBox>
    </CenteredContainer>
  );
};

const PasswordResetForm = () => {
  const data = useActionData();
  const transition = useTransition();

  const isPasswordChanging = transition.state === "submitting";

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!isPasswordChanging && formRef.current) {
      formRef.current.reset();
      formRef.current.focus();
    }
  }, [isPasswordChanging]);

  return (
    <Form method="post" css={{ width: "100%" }} ref={formRef}>
      <GappedBox css={{ flexDirection: "column", marginTop: 10, gap: 10 }}>
        <Label htmlFor="oldPassword">Eski Parola</Label>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          placeholder="eskimis-parola"
          aria-errormessage={
            data?.fieldErrors?.oldPassword ? "old-password-error" : undefined
          }
        />
        {data?.fieldErrors?.oldPassword ? (
          <ValidationMessage
            error={data.fieldErrors.oldPassword}
            isSubmitting={transition.state === "submitting"}
          />
        ) : null}

        <Label htmlFor="newPassword">Yeni Parola</Label>
        <Input
          id="newPassword"
          name="newPassword"
          placeholder="cok-gizli-parola"
          type="password"
          aria-errormessage={
            data?.fieldErrors?.newPassword ? "password-error" : undefined
          }
        />
        {data?.fieldErrors?.newPassword ? (
          <ValidationMessage
            error={data.fieldErrors.newPassword}
            isSubmitting={transition.state === "submitting"}
          />
        ) : null}
        <Box>
          <Button type="submit">Parolanı Değiştir </Button>
        </Box>
        {data?.formError ? (
          <ValidationMessage
            error={data.formError}
            isSubmitting={transition.state === "submitting"}
          />
        ) : (
          <Text css={{ color: "$amber11" }}>{data?.message}</Text>
        )}
      </GappedBox>
    </Form>
  );
};

export default Settings;
