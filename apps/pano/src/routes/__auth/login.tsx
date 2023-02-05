import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
} from "@kampus/ui";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { authenticator } from "~/features/auth/remix-auth-authenticator.server";
import { commitSession, getSession } from "~/session.server";

interface LoaderData {
  hasSentEmail: boolean;
  error: any;
}

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  const session = await getSession(request);
  const hasSentEmail = session.has("auth:otp");

  const error = session.get(authenticator.sessionErrorKey);

  // Commits Session to clear any possible error message.
  return json<LoaderData>(
    { hasSentEmail, error },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const meta: MetaFunction = () => {
  return {
    title: "Giriş",
  };
};

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";

  const { hasSentEmail } = useLoaderData<LoaderData>();

  return (
    <CenteredContainer>
      <GappedBox css={{ marginTop: 10 }}>
        <Form
          style={{ flex: 1 }}
          method="post"
          action="/api/auth/login"
          noValidate
        >
          <GappedBox css={{ flexDirection: "column" }}>
            {hasSentEmail ? (
              <>
                <Label htmlFor="code">Giriş kodu</Label>
                <Input
                  id="code"
                  name="code"
                  type="text"
                  placeholder="123456"
                  size="2"
                />
              </>
            ) : (
              <>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="iron-man@avengers.co"
                  size="2"
                />
              </>
            )}
            <Box>
              <Button size="2" type="submit">
                {hasSentEmail ? "Yeni kod gonder" : "Giriş linki gonder"}
              </Button>
            </Box>
            <input type="hidden" name="redirectTo" value={redirectTo} />
          </GappedBox>
        </Form>

        <GappedBox css={{ flexDirection: "column", flex: 1 }}>
          <Form action="/api/auth/github" method="post">
            <Button size="2" type="submit">
              Github'la Giriş yap
            </Button>
          </Form>
          <Form action="/api/auth/discord" method="post">
            <Button size="2" type="submit">
              Discord'la Giriş yap
            </Button>
          </Form>
          <Form action="/api/auth/twitch" method="post">
            <Button size="2" type="submit">
              Twitch'le Giriş yap
            </Button>
          </Form>
        </GappedBox>
      </GappedBox>
    </CenteredContainer>
  );
};

export default Login;
