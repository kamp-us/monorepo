import { useUserContext } from "~/features/auth/user-context";
import { fetchUser } from "~/features/auth/useFetchUser";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CenteredContainer,
  GappedBox,
  ValidationMessage,
  Text,
  Label,
  Form,
  Input,
} from "~/ui-library";
import { withSSR } from "~/features/utils/amplify/withSSR";
import { Auth } from "aws-amplify";
import type { LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";

type ActionData = {
  formError?: string;
  fieldErrors?: {
    oldPassword: string | undefined;
    newPassword: string | undefined;
  };
};
const badRequest = (data: ActionData) => json(data, { status: 400 });

const validatePassword = (password: unknown) => {
  if (typeof password !== "string" || password.length < 6) {
    return `Şifre en az 6 karakter olmalıdır.`;
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const SSR = withSSR({ request });
  try {
    await fetchUser(SSR.Auth);
  } catch {
    return redirect("/login");
  }

  return true;
};

const Settings = () => {
  const user = useUserContext();
  const username = user?.username;
  const email = user?.attributes?.email;

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
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<{
    newPassword: string | undefined;
    oldPassword: string | undefined;
  }>({
    newPassword: undefined,
    oldPassword: undefined,
  });
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!submitting && formRef.current) {
      formRef.current.reset();
      formRef.current.focus();
    }
  }, [submitting]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const oldPassword = formData.get("oldPassword");
    const newPassword = formData.get("newPassword");

    if (typeof oldPassword !== "string" || typeof newPassword !== "string") {
      return badRequest({
        formError: "Lütfen eski parola ve yeni parola alanlarını doldurun.",
      });
    }

    const errors = {
      oldPassword: validatePassword(oldPassword),
      newPassword: validatePassword(newPassword),
    };

    if (Object.values(errors).some(Boolean)) {
      setFieldErrors(errors);
      return;
    }

    setSubmitting(true);
    try {
      const u = await Auth.currentAuthenticatedUser();
      await Auth.changePassword(u, oldPassword, newPassword);
      setMessage("Şifreniz başarıyla değiştirildi.");
    } catch (e) {
      setFormError("Yeni parolada veya eski parolada bir hata var.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form onSubmit={onSubmit} css={{ width: "100%" }} ref={formRef}>
      <GappedBox css={{ flexDirection: "column", marginTop: 10, gap: 10 }}>
        <Label htmlFor="oldPassword">Eski Parola</Label>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          placeholder="eskimis-parola"
          aria-errormessage={
            fieldErrors?.oldPassword ? "old-password-error" : undefined
          }
        />
        {fieldErrors?.oldPassword ? (
          <ValidationMessage
            error={fieldErrors.oldPassword}
            isSubmitting={submitting}
          />
        ) : null}

        <Label htmlFor="newPassword">Yeni Parola</Label>
        <Input
          id="newPassword"
          name="newPassword"
          placeholder="cok-gizli-parola"
          type="password"
          aria-errormessage={
            fieldErrors?.newPassword ? "password-error" : undefined
          }
        />
        {fieldErrors?.newPassword ? (
          <ValidationMessage
            error={fieldErrors.newPassword}
            isSubmitting={submitting}
          />
        ) : null}
        <Box>
          <Button type="submit">Parolanı Değiştir </Button>
        </Box>
        {formError ? (
          <ValidationMessage error={formError} isSubmitting={submitting} />
        ) : (
          <Text css={{ color: "$amber11" }}>{message}</Text>
        )}
      </GappedBox>
    </Form>
  );
};

export default Settings;
