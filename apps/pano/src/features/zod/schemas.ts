import { z } from "zod";

export type inferSafeParseErrors<
  T extends z.ZodType<any, any, any>,
  U = string
> = {
  formErrors: U[];
  fieldErrors: {
    [P in keyof z.infer<T>]?: U[];
  };
};

export const SettingsSchema = z.object({
  oldPassword: z.string().min(6, { message: "Parolanizi eksik doldurdunuz" }),
  newPassword: z
    .string()
    .min(6, { message: "Yeni parola en az 6 karakterden olusmalidir" }),
  username: z.string().min(2, { message: "Kullanici adi uygun degil" }),
  email: z.string().email({ message: "Gecerli bir email adresi girin" }),
});

export const SchemaWithoutPasswords = SettingsSchema.omit({
  oldPassword: true,
  newPassword: true,
});

export type SettingsFields = z.infer<typeof SettingsSchema>;
export type SettingsFieldsErrors = inferSafeParseErrors<typeof SettingsSchema>;
