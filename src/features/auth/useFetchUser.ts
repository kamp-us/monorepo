import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { AuthUser } from "./user-context";

export const fetchUser = async (auth: typeof Auth) => {
  return await auth.currentAuthenticatedUser();
};

export const useFetchUser = (): [
  AuthUser | null,
  { loading: boolean; error: Error | null }
] => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const asyncEffect = async () => {
    setLoading(true);
    try {
      const u = await fetchUser(Auth);
      setUser(u);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    asyncEffect();
  }, []);

  return [user, { loading, error }];
};
