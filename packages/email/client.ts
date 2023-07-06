import { type SendEmailOptions } from "./schemas";

export const sendEmail = async (
  options: SendEmailOptions,
  postaciOptions?: { baseUrl?: string }
) => {
  const baseUrl = postaciOptions?.baseUrl ?? "";

  const res = await fetch(baseUrl + "/postaci/send", {
    method: "POST",
    body: JSON.stringify(options),
  });

  const result = (await res.json()) as unknown as { success: boolean; error: Error };

  return result;
};
