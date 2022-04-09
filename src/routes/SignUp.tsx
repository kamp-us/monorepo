import React, { useEffect, useState } from "react";
import { useUserContext } from "../features/auth/user-context";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";

const initialState = { username: "", password: "", email: "" };

export const SignUp = () => {
  const [formState, updateFormState] = useState(initialState);
  const [error, setError] = useState<Error | null>(null);
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

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await signUp();
      navigate("/activate");
    } catch (err) {
      setError(err as Error);
      console.log(err);
    }
  };

  const signUp = async () => {
    const { username, password, email } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(initialState);
  };

  return (
    <CenteredContainer>
      <div>
        <form onSubmit={onFormSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <div>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="batman"
                required
                onChange={(event) => setInput("username", event.target.value)}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="super@hero.com"
                required
                onChange={(event) => setInput("email", event.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                name="password"
                placeholder="super-secret-password"
                type="password"
                required
                onChange={(event) => setInput("password", event.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
      <Link to="/login">Do you already have an account?</Link>
    </CenteredContainer>
  );
};
