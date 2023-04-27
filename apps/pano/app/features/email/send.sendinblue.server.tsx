import { render } from "@react-email/render";
import { SendSmtpEmail, TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from "@sendinblue/client";
import invariant from "tiny-invariant";
import { env } from "~/utils/env.server";

const createClient = (apiKey: string) => {
  let apiInstance = new TransactionalEmailsApi();

  apiInstance.setApiKey(TransactionalEmailsApiApiKeys.apiKey, apiKey);

  return apiInstance;
};

interface EmailOptions {
  subject: string;
  email: string;
}

export const sendEmail = async (options: EmailOptions, element: JSX.Element) => {
  invariant(env.SEND_IN_BLUE_API_KEY, "sendinblue api key is required");

  const apiInstance = createClient(env.SEND_IN_BLUE_API_KEY);
  let sendSmtpEmail = new SendSmtpEmail();

  sendSmtpEmail.subject = options.subject;
  sendSmtpEmail.htmlContent = render(element);
  sendSmtpEmail.sender = { name: "kamp.us", email: "no-reply@kamp.us" };
  sendSmtpEmail.to = [{ email: options.email }];

  try {
    const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
