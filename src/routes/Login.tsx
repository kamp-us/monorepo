import React, { useEffect, useState } from "react";
import { useUserContext } from "../features/auth/user-context";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { Box } from "../ui-library/layout-components/Box";
import { Label } from "../ui-library/Label";
import { Input } from "../ui-library/Input";
import { GappedBox } from "../ui-library/GappedBox";
import { Button } from "../ui-library/layout-components/Button";

const initialState = { username: "", password: "" };

export const Login = () => {
  const [formState, updateFormState] = useState(initialState);
  const [, setError] = useState<Error | null>(null);
  const user = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const setInput = (key: string, value: any) => {
    updateFormState({ ...formState, [key]: value });
  };

  const signIn = async () => {
    const { username, password } = formState;
    const user = await Auth.signIn(username, password);
    console.log(user, "USER");
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await signIn();
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError(err as Error);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <CenteredContainer>
        <GappedBox css={{ flexDirection: "column", marginTop: 10 }}>
          <Label htmlFor="username">Kullanıcı Adı</Label>
          <Input
            id="username"
            name="username"
            type="text"
            placeholder="iron-man"
            required
            onChange={(event) => setInput("username", event.target.value)}
          />

          <Label htmlFor="password">Parola</Label>
          <Input
            id="password"
            name="password"
            placeholder="super-secret-password"
            type="password"
            required
            onChange={(event) => setInput("password", event.target.value)}
          />

          <Box>
            <Button type="submit">Giriş yap</Button>
          </Box>
        </GappedBox>
      </CenteredContainer>
    </form>
  );
};
