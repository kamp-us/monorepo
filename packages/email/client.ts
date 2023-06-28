import { type SendEmailOptions } from "./schemas";

export const sendEmail = async (options: SendEmailOptions) => {
  const res = await fetch("/postaci/send", {
    method: "POST",
    body: JSON.stringify(options),
  });

  return res.json() as unknown as { success: boolean };
};
