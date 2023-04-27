import { Box, Button, CenteredContainer, Form, GappedBox, Input, Label } from "@kampus/ui";
import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Giriş",
  };
};

export const Login = () => {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/";

  return (
    <CenteredContainer>
      <Form method="post" action="/api/auth/login" noValidate>
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="username">Kullanıcı Adı</Label>
          <Input id="username" name="username" type="text" placeholder="iron-man" />

          <Label htmlFor="password">Parola</Label>
          <Input id="password" name="password" placeholder="super-secret-password" type="password" />
          <Box>
            <Button type="submit">Giriş yap</Button>
          </Box>
          <input type="hidden" name="redirectTo" value={redirectTo} />
        </GappedBox>
      </Form>
    </CenteredContainer>
  );
};

export default Login;
