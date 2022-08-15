import { Auth } from "aws-amplify";
import config from "~/aws-exports";
import { fetchUser } from "~/features/auth/useFetchUser";
import type { AuthUser } from "~/features/auth/user-context";
// @ts-ignore
import { createApolloClient } from "./createApolloClient";

type CognitoSession = Awaited<ReturnType<typeof Auth.currentSession>>;

// console.log("config", config.default);
// Amplify.configure({ ...config.default });

export const createClient = async () => {
  let user: AuthUser | null = null;
  let session: CognitoSession | null = null;
  try {
    user = await fetchUser(Auth);
    session = await Auth.currentSession();
  } catch {
    user = null;
    session = null;
  }

  const apolloClient = createApolloClient({
    user,
    session,
    endpoint: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    apiKey: config.aws_appsync_apiKey,
  });

  return apolloClient;
};
