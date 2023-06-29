import { z } from "zod";

export const emailSchema = z.object({
  from: z.string().email().optional().default("postaci@kamp.us"),
  to: z.string().email(),
  subject: z.string(),
});

export type EmailOptions = z.infer<typeof emailSchema>;

export const magicLinkSchema = z.object({
  url: z.string(),
});

export type MagicLinkOptions = z.infer<typeof magicLinkSchema>;

export const kampusEmailSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("magic-link"), props: magicLinkSchema }),
]);

export const sendEmailSchema = z.object({
  email: emailSchema,
  kampusEmail: kampusEmailSchema,
});

export type SendEmailOptions = z.infer<typeof sendEmailSchema>;
