import { Auth } from "aws-amplify";
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
import type { FormEvent} from "react";
import { useState } from "react";

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

export const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<{
    username: string | undefined;
    password: string | undefined;
  }>({
    username: undefined,
    password: undefined,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const clearErrors = () => {
      setFieldErrors({
        username: undefined,
        password: undefined,
      });
    }
    clearErrors();
    
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const fieldErrors = {
      username: validateUsername(username),
      password: validatePassword(password),
    };

    if (Object.values(fieldErrors).some(Boolean)) {
      setFieldErrors(fieldErrors);
      return;
    }

    if (typeof username !== "string" || typeof password !== "string") {
      return;
    }

    setSubmitting(true);
    try {
      await Auth.signIn(username, password);
      location.href = "/";
    } catch (error) {
      setFormError("Kullanıcı adı veya parola yanlış.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <CenteredContainer>
      <Form onSubmit={onSubmit}>
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
              isSubmitting={submitting}
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
              isSubmitting={submitting}
            />
          ) : null}
          <Box>
            <Button type="submit">{submitting ? "..." : "Giriş yap"}</Button>
          </Box>
          {formError ? (
            <ValidationMessage error={formError} isSubmitting={submitting} />
          ) : null}
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Login;
