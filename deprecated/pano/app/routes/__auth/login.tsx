import {
  Box,
  Button,
  CenteredContainer,
  Form,
  GappedBox,
  Input,
  Label,
  Separator,
  SmallLink,
  Text,
} from "@kampus/ui";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams } from "@remix-run/react";
import { authenticator } from "~/authenticator.server";
import { OAuthLoginForm } from "~/features/oauth/OAuthLoginForm";
import { commitSession, getSession } from "~/session.server";

export const meta: MetaFunction = () => {
  return {
    title: "Giriş",
  };
};

export const loader = async ({ request }: LoaderArgs) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  const session = await getSession(request);
  const hasSentEmail = session.has("auth:otp");

  const error = session.get(authenticator.authenticator.sessionErrorKey);

  // Commits Session to clear any possible error message.
  return json(
    { hasSentEmail, error },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";
  const { hasSentEmail } = useLoaderData<typeof loader>();

  return (
    <CenteredContainer>
      <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
        <Form style={{ flex: 1 }} method="post" action="/api/auth/otp" noValidate>
          <GappedBox css={{ flexDirection: "column" }}>
            {hasSentEmail ? (
              <>
                <Label htmlFor="code">Giriş kodu</Label>
                <Input id="code" name="code" type="text" placeholder="123456" size="2" />
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
                {hasSentEmail ? "Giriş yap" : "Giriş linki gonder"}
              </Button>
            </Box>
            <input type="hidden" name="redirectTo" value={redirectTo} />
          </GappedBox>
        </Form>

        <Text size="1" css={{ margin: "auto" }}>
          ya da
        </Text>
        <Separator css={{ marginBottom: 4 }} />
        <GappedBox css={{ flexDirection: "column", "@md": { flexDirection: "row" } }}>
          <OAuthLoginForm provider="discord" />
          <OAuthLoginForm provider="github" />
        </GappedBox>
        <SmallLink to="/login-form" css={{ width: "fit-content" }}>
          Şifreyle giriş yapmak için tıkla
        </SmallLink>
      </GappedBox>
    </CenteredContainer>
  );
};

export default Login;
