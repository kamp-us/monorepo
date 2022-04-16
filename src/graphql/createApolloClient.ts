import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { AuthUser } from "../features/auth/user-context";

interface CognitoUserSession {
  getIdToken: () => {
    getJwtToken: () => string;
  };
}

interface CreateApolloClientProps {
  endpoint: string;
  user: AuthUser | null;
  region: string;
  session: CognitoUserSession | null;
  apiKey: string;
}

export const createApolloClient = ({
  endpoint,
  user,
  region,
  session,
  apiKey,
}: CreateApolloClientProps) => {
  const httpLink = createHttpLink({
    uri: endpoint,
  });

  const authLink = createAuthLink({
    url: endpoint,
    region,
    auth:
      user && session
        ? {
            type: "AMAZON_COGNITO_USER_POOLS",
            jwtToken: () => session.getIdToken().getJwtToken(),
          }
        : {
            type: "API_KEY",
            apiKey,
          },
  });

  const subscriptionLink = createSubscriptionHandshakeLink(endpoint, httpLink);

  const link = ApolloLink.from([authLink, subscriptionLink]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
};
