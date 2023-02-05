import { render } from "@react-email/render";
import AWS from "aws-sdk";
import type { User } from "~/models/user.server";
import { Registration } from "./components/Registration";

export const sendEmail = async (user: User, code: string) => {
  const html = render(<Registration code={code} />);

  const options = {
    Source: "no-reply@kamp.us",
    Destination: {
      ToAddresses: [user.email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: html,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "kampus'e hoşgeldin",
      },
    },
  };

  return new AWS.SES({ apiVersion: "2010-12-01" }).sendEmail(options).promise();
};
