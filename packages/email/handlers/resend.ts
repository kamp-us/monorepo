import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

import { renderEmail } from "../render";
import { sendEmailSchema } from "../schemas";

export const createHandler = (apiKey: string) => {
  const resend = new Resend(apiKey);

  const KampusEmailResendHandler = async (request: NextRequest) => {
    const result = sendEmailSchema.safeParse(await request.json());

    if (!result.success) {
      return new Response("input error, check request body", { status: 400 });
    }

    const { email, kampusEmail } = result.data;

    try {
      await resend.emails.send({
        from: email.from,
        to: email.to,
        subject: email.subject,
        react: renderEmail(kampusEmail),
      });
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: unknown) {
      return NextResponse.json({ success: false, error: error as Error }, { status: 500 });
    }
  };

  return KampusEmailResendHandler;
};
