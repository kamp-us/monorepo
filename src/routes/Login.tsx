import React, { useEffect, useState } from "react";
import { useUserContext } from "../features/auth/user-context";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";
import { Link } from "../ui-library/Link";

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
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err as Error);
    }
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
                placeholder="iron-man"
                required
                onChange={(event) => setInput("username", event.target.value)}
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
            <button type="submit">Log in</button>
          </div>
          {/*{error && (*/}
          {/*  <div className="mt-6">*/}
          {/*    <p>{error}</p>*/}
          {/*  </div>*/}
          {/*)}*/}
        </form>
      </div>
      <Link to="/signup">Don't you have an account?</Link>
    </CenteredContainer>
  );
};
