import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import Email from "vercel-email";
import { z } from "zod";

import { kampusEmailSchema, renderEmail } from "./emails";

const emailSchema = z.object({
  from: z.string().email().optional(),
  to: z.string().email(),
  subject: z.string(),
});

const sendEmailSchema = z.object({
  email: emailSchema,
  kampusEmail: kampusEmailSchema,
});

type EmailOptions = z.infer<typeof sendEmailSchema>;

export const POST = async (request: Request) => {
  const result = sendEmailSchema.safeParse(await request.json());

  if (!result.success) {
    return NextResponse.json({ success: result.success }, { status: 400 });
  }

  const { email, kampusEmail } = result.data;

  await Email.send({
    from: email.from ?? "postaci@kamp.us",
    to: email.to,
    subject: email.subject,
    html: render(renderEmail(kampusEmail)),
  });

  return NextResponse.json({ success: result.success });
};

export const sendEmail = async (options: EmailOptions) => {
  const res = await fetch("/postaci/send", {
    method: "POST",
    body: JSON.stringify(options),
  });

  return res.json() as unknown as { success: boolean };
};
