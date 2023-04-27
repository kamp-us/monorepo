import { Box, Button, CenteredContainer, Form, GappedBox, Input, Label, Text, ValidationMessage } from "@kampus/ui";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import type { FC } from "react";
import { z } from "zod";
import { authenticator, requireUser } from "~/authenticator.server";
import type { inferSafeParseErrors } from "~/features/zod/utils";
import type { User } from "~/models/user.server";
import { hasPassword, updateEmail, updatePassword, updateUsername } from "~/models/user.server";
import { useUser } from "~/utils";

const SettingsSchema = z.object({
  oldPassword: z.string().min(6, { message: "Parolanızı eksik doldurdunuz" }).optional(),
  newPassword: z.string().min(6, { message: "Yeni parola en az 6 karakterden oluşmalıdır" }),
  username: z.string().min(2, { message: "Kullanıcı adı uygun değil" }),
  email: z.string().email({ message: "Geçerli bir email adresi girin" }),
  hasPassword: z.string(),
});

const SchemaWithoutPasswords = SettingsSchema.omit({
  oldPassword: true,
  newPassword: true,
});

type SettingsFields = z.infer<typeof SettingsSchema>;
type SettingsFieldsErrors = inferSafeParseErrors<typeof SettingsSchema>;

export const loader: LoaderFunction = async ({ request }) => {
  const user = await requireUser(request);

  return json({
    hasPassword: await hasPassword(user.id),
  });
};

type ActionData = {
  fields: SettingsFields;
  errors?: SettingsFieldsErrors;
  successful?: boolean;
};
const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const user = await requireUser(request);
  const formData = await request.formData();
  const fields = Object.fromEntries(formData.entries()) as SettingsFields;
  const hasPwd = fields.hasPassword === "true";
  const noPassword = fields.oldPassword?.length === 0 && fields.newPassword.length === 0;

  const schema = noPassword ? SchemaWithoutPasswords : SettingsSchema;

  const result = schema.safeParse(fields);
  if (!result.success) {
    return badRequest({
      fields,
      errors: result.error.flatten(),
    });
  }

  if (!noPassword) {
    const success = await updatePassword(
      user,
      hasPwd && fields.oldPassword ? fields.oldPassword : null,
      fields.newPassword
    );
    if (!success) {
      return badRequest({
        fields,
        errors: {
          formErrors: [],
          fieldErrors: {
            newPassword: ["Parola güncellenemedi"],
          },
        },
      });
    }
  }

  let success = await updateEmail(user, fields.email);
  if (!success) {
    return badRequest({
      fields,
      errors: {
        formErrors: [],
        fieldErrors: {
          email: ["Bu email adresi kullanılamaz"],
        },
      },
    });
  }
  success = await updateUsername(user, fields.username);
  if (!success) {
    return badRequest({
      fields,
      errors: {
        formErrors: [],
        fieldErrors: {
          username: ["Bu kullanıcı adı kullanılamaz"],
        },
      },
    });
  }

  return json({ fields, successful: true });
};

const Settings = () => {
  const user = useUser();
  const username = user.username;
  const email = user.email;

  const loaderData = useLoaderData<typeof loader>();

  const actionData = useActionData<ActionData>();
  const { errors, successful } = actionData ?? {};
  const { fieldErrors } = errors ?? {};

  return (
    <CenteredContainer>
      <GappedBox css={{ flexDirection: "column", mt: 20 }}>
        <Form method="post" css={{ width: "100%" }}>
          <GappedBox css={{ flexDirection: "column" }}>
            <Label htmlFor="username">Kullanıcı adı</Label>
            <Input id="username" name="username" placeholder="iron-man" defaultValue={username} />
            {fieldErrors?.username ? <ValidationMessage error={fieldErrors.username[0]} /> : null}
            <Label htmlFor="email">E-Posta</Label>
            <Input id="email" name="email" placeholder="tony-stark@avengers.co" defaultValue={email} />
            {fieldErrors?.email ? <ValidationMessage error={fieldErrors.email[0]} /> : null}
            <PasswordReset errors={errors} hasPassword={loaderData.hasPassword} />
            <input name="hasPassword" type="hidden" value={loaderData.hasPassword} />
            <Box>
              <Button type="submit">Güncelle</Button>
            </Box>
          </GappedBox>
        </Form>
        {successful && <Text css={{ color: "$amber11" }}>Ayarlar başarıyla güncellendi.</Text>}
      </GappedBox>
    </CenteredContainer>
  );
};

const PasswordReset: FC<{
  errors: ActionData["errors"];
  hasPassword: boolean;
}> = ({ errors, hasPassword }) => {
  return (
    <>
      {hasPassword && (
        <>
          <Label htmlFor="oldPassword">Eski Parola</Label>

          <Input
            id="oldPassword"
            name="oldPassword"
            type="password"
            placeholder="eskimis-parola"
            aria-errormessage={errors?.fieldErrors.oldPassword ? "old-password-error" : undefined}
          />
        </>
      )}
      {errors?.fieldErrors.oldPassword ? <ValidationMessage error={errors.fieldErrors.oldPassword[0]} /> : null}

      <Label htmlFor="newPassword">Yeni Parola</Label>
      <Input
        id="newPassword"
        name="newPassword"
        placeholder="cok-gizli-parola"
        type="password"
        aria-errormessage={errors?.fieldErrors.newPassword ? "password-error" : undefined}
      />
      {errors?.fieldErrors.newPassword ? <ValidationMessage error={errors.fieldErrors.newPassword[0]} /> : null}
    </>
  );
};

export default Settings;
