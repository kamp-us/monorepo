import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import type { FC } from "react";
import { updatePassword } from "~/models/user.server";
import { requireUser } from "~/session.server";
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
} from "~/ui-library";
import { useUser } from "~/utils";

export interface ActionData {
  errors?: {
    oldPassword?: string;
    newPassword?: string;
  };
  success?: true;
}

export const loader: LoaderFunction = async ({ request }) => {
  await requireUser(request);
  return true;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const oldPassword = formData.get("oldPassword")?.toString() ?? "";
  const newPassword = formData.get("newPassword")?.toString() ?? "";

  if (!oldPassword) {
    return json<ActionData>({
      errors: {
        oldPassword: "Lütfen eski parola alanını doldurun.",
      },
    });
  }

  if (newPassword.length < 6) {
    return json<ActionData>({
      errors: {
        newPassword: "Yeni parola en az 6 karakter olmalıdır.",
      },
    });
  }

  const user = await requireUser(request);

  await updatePassword(user, oldPassword, newPassword);

  return json<ActionData>({
    success: true,
  });
};

const Settings = () => {
  const user = useUser();
  const username = user.username;
  const email = user.email;

  const actionData = useActionData<ActionData>();

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
        <PasswordResetForm
          errors={actionData?.errors}
          success={actionData?.success}
        />
      </GappedBox>
    </CenteredContainer>
  );
};

const PasswordResetForm: FC<{
  errors: ActionData["errors"];
  success: ActionData["success"];
}> = ({ errors, success }) => {
  return (
    <Form method="post" css={{ width: "100%" }}>
      <GappedBox css={{ flexDirection: "column", marginTop: 10, gap: 10 }}>
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
        <Box>
          <Button type="submit">Parolanı Değiştir </Button>
        </Box>
        {success && (
          <Text css={{ color: "$amber11" }}>
            Şifreniz başarıyla değiştirildi.
          </Text>
        )}
      </GappedBox>
    </Form>
  );
};

export default Settings;
