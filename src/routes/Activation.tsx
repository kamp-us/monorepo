import React, { useEffect, useState } from "react";
import { useUserContext } from "../features/auth/user-context";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { CenteredContainer } from "../ui-library/layout-components/CenteredContainer";

const initialState = { username: "", code: "" };

export const Activation = () => {
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

  const confirmSignUp = async () => {
    const { username, code } = formState;
    const user = await Auth.confirmSignUp(username, code);
    console.log(user, "USER");
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await confirmSignUp();
      navigate("/login");
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
                autoComplete="text"
                placeholder="iron-man"
                required
                onChange={(event) => setInput("username", event.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="code">Code</label>
            <div>
              <input
                id="code"
                name="code"
                placeholder="super-secret-code"
                type="text"
                required
                onChange={(event) => setInput("code", event.target.value)}
              />
            </div>
          </div>

          <div>
            <button type="submit">Activate</button>
          </div>
          {error && (
            <div className="mt-6">
              <p>{error}</p>
            </div>
          )}
        </form>
      </div>
    </CenteredContainer>
  );
};
