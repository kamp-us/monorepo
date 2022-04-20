import { Amplify, Auth } from "aws-amplify";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import { json } from "@remix-run/node";
import { globalStyles } from "~/ui-library/globalStyles";
import { ThemeProvider } from "~/ui-library/ThemeProvider";
import { fetchUser } from "./features/auth/useFetchUser";
import { AuthUser, UserContext } from "./features/auth/user-context";
import { createApolloClient } from "./graphql/createApolloClient";
// @ts-ignore
import config from "~/aws-exports";
import { ApolloProvider } from "@apollo/client";
import { Topnav } from "~/ui-library/topnav/Topnav";
import { useEffect } from "react";
import { useClientStyle } from "~/ui-library/StyleProvider";

console.log("config");
Amplify.configure({ ...config });

type CognitoSession = Awaited<ReturnType<typeof Auth.currentSession>>;

type LoaderData = {
  user: AuthUser | null;
  session: CognitoSession | null;
};

export const loader = async () => {
  let user: AuthUser | null = null;
  let session: CognitoSession | null = null;
  try {
    user = await fetchUser(Auth);
    session = await Auth.currentSession();
  } catch {
    user = null;
    session = null;
  }

  return json({
    user,
    session,
  });
};

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = ({ children, title }: DocumentProps) => {
  const clientStyle = useClientStyle();

  useEffect(() => {
    clientStyle.reset();
  }, [clientStyle]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: clientStyle.sheet }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  const { user, session } = useLoaderData<LoaderData>();

  globalStyles();

  const apolloClient = createApolloClient({
    user,
    session,
    endpoint: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    apiKey: config.aws_appsync_apiKey,
  });

  return (
    <Document>
      <UserContext.Provider value={user}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <Topnav />
            <Outlet />
          </ThemeProvider>
        </ApolloProvider>
      </UserContext.Provider>
    </Document>
  );
}
