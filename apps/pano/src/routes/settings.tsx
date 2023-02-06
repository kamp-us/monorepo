import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  Text,
  ValidationMessage,
} from "@kampus/ui";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import type { FC } from "react";
import {
  updateEmail,
  updatePassword,
  updateUsername,
} from "~/models/user.server";
import { requireUser } from "~/session.server";
import { useUser } from "~/utils";

export interface ActionData {
  errors?: {
    oldPassword?: string;
    newPassword?: string;
    username?: string;
    email?: string;
  };
  success?: true;
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  return true;
};

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const oldPassword = formData.get("oldPassword")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";
  const username = formData.get("username")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";

  let success = await updateEmail(user, email);
  if (!success) {
    return json<ActionData>({
      errors: {
        email: "Bu email adresi gecerli degil.",
      },
    });
  }
  success = await updateUsername(user, username);
  if (!success) {
    return json<ActionData>({
      errors: {
        username: "Bu kullanici adi gecerli degil.",
      },
    });
  }
  if (!oldPassword && newPassword) {
    return json<ActionData>({
      errors: {
        oldPassword: "Eski parola boş olamaz.",
      },
    });
  }
  if (oldPassword && !newPassword) {
    return json<ActionData>({
      errors: {
        newPassword: "Yeni parola boş olamaz.",
      },
    });
  }

  if (oldPassword && newPassword) {
    if (newPassword.length < 6) {
      return json<ActionData>({
        errors: {
          newPassword: "Yeni parola en az 6 karakter olmalıdır.",
        },
      });
    }
    success = await updatePassword(user, oldPassword, newPassword);
    if (!success) {
      return json<ActionData>({
        errors: {
          oldPassword: "Eski parola yanlış.",
        },
      });
    }
  }

  return json<ActionData>({
    success: true,
  });
};

const Settings = () => {
  const user = useUser();
  const username = user.username;
  const email = user.email;

  const actionData = useActionData<ActionData>();
  const { errors, success } = actionData ?? {};

  return (
    <CenteredContainer>
      <GappedBox css={{ flexDirection: "column", mt: 20 }}>
        <Form method="post" css={{ width: "100%" }}>
          <GappedBox css={{ flexDirection: "column" }}>
            <Label htmlFor="username">Kullanici adi</Label>
            <Input
              id="username"
              name="username"
              placeholder="iron-man"
              defaultValue={username}
            />
            {errors?.username ? (
              <ValidationMessage error={errors.username} />
            ) : null}
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="tony-stark@avengers.co"
              defaultValue={email}
            />
            {errors?.email ? <ValidationMessage error={errors.email} /> : null}
            <PasswordReset errors={errors} />
            <Box>
              <Button type="submit">Guncelle</Button>
            </Box>
          </GappedBox>
        </Form>
        {success && (
          <Text css={{ color: "$amber11" }}>
            Ayarlar basariyla guncellendi.
          </Text>
        )}
      </GappedBox>
    </CenteredContainer>
  );
};

const PasswordReset: FC<{
  errors: ActionData["errors"];
}> = ({ errors }) => {
  return (
    <>
      <Label htmlFor="oldPassword">Eski Parola</Label>
      <Input
        id="oldPassword"
        name="oldPassword"
        type="password"
        placeholder="eskimis-parola"
        aria-errormessage={
          errors?.oldPassword ? "old-password-error" : undefined
        }
      />
      {errors?.oldPassword ? (
        <ValidationMessage error={errors.oldPassword} />
      ) : null}

      <Label htmlFor="newPassword">Yeni Parola</Label>
      <Input
        id="newPassword"
        name="newPassword"
        placeholder="cok-gizli-parola"
        type="password"
        aria-errormessage={errors?.newPassword ? "password-error" : undefined}
      />
      {errors?.newPassword ? (
        <ValidationMessage error={errors.newPassword} />
      ) : null}
    </>
  );
};

export default Settings;
