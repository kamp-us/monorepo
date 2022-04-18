import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalStyles } from "./ui-library/globalStyles";
import "./index.css";
import { fetchUser } from "./features/auth/useFetchUser";
import { createApolloClient } from "./graphql/createApolloClient";
import { Amplify, Auth } from "aws-amplify";
// @ts-ignore
import config from "./aws-exports";
import { AuthUser, UserContext } from "./features/auth/user-context";
import { ApolloProvider } from "@apollo/client";
import { StrictMode } from "react";

Amplify.configure({ ...config });

globalStyles();

type CognitoSession = Awaited<ReturnType<typeof Auth.currentSession>>;

const render = async () => {
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

  ReactDOM.render(
    <StrictMode>
      <UserContext.Provider value={user}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </UserContext.Provider>
      ,
    </StrictMode>,
    document.getElementById("root")
  );
};

render();

// fetch logged in user
// create apollo client

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
