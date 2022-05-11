import { Auth, withSSRContext } from "aws-amplify";

export const withSSR = ({ request }: { request: Request }) => {
  const SSR = withSSRContext({
    req: {
      headers: {
        cookie: request.headers.get("Cookie"),
      },
    },
  });

  // const auth = SSR.Auth as typeof Auth;

  return SSR;
};
