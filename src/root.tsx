import type { Auth } from "aws-amplify";
import { Amplify } from "aws-amplify";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { fetchUser } from "./features/auth/useFetchUser";
import type { AuthUser } from "./features/auth/user-context";
import { UserContext } from "./features/auth/user-context";
import { createApolloClient } from "./graphql/createApolloClient";
// @ts-ignore
import config from "~/aws-exports";
import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
import { ThemeProvider, useClientStyle, Topnav, useTheme } from "~/ui-library";
import { darkTheme } from "./stitches.config";
import { withSSR } from "./features/utils/amplify/withSSR";
import { useLoadingIndicator } from "./features/loading-indicator/useLoadingIndicator";
import loadingIndicatorStyles from "./features/loading-indicator/loading-indicator.css";
import { SkipToContextManager } from "./features/skip-to/context";
import { SkipToLandmark } from "./features/skip-to/components/SkipToLandmark";

Amplify.configure({ ...config, ssr: true });

type CognitoSession = Awaited<ReturnType<typeof Auth.currentSession>>;

type LoaderData = {
  user: AuthUser | null;
  session: CognitoSession | null;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: loadingIndicatorStyles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const SSR = withSSR({ request });

  let user: AuthUser | null = null;
  let session: CognitoSession | null = null;
  try {
    user = await fetchUser(SSR.Auth);
    session = await SSR.Auth.currentSession();
  } catch (error) {
    console.log("error", error);
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
}

const Document = ({ children }: DocumentProps) => {
  const clientStyle = useClientStyle();
  const { theme } = useTheme();

  useLoadingIndicator();

  useEffect(() => {
    clientStyle.reset();
  }, [clientStyle]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>pano</title>
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
          suppressHydrationWarning
        />
        <style
          id="global"
          dangerouslySetInnerHTML={{
            __html: `
            * { margin: 0; padding: 0; }
            body {
              font-family: Inter, sans-serif;
              background: var(--colors-gray1);
            }
          `,
          }}
        />
      </head>
      <body className={theme === "dark" ? darkTheme : ""}>
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

  const apolloClient = createApolloClient({
    user,
    session,
    endpoint: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    apiKey: config.aws_appsync_apiKey,
  });

  return (
    <ThemeProvider>
      <Document>
        <UserContext.Provider value={user}>
          <ApolloProvider client={apolloClient}>
            <SkipToContextManager>
              <Topnav />
              <SkipToLandmark type="main" id="main" label="Main">
                <Outlet />
              </SkipToLandmark>
            </SkipToContextManager>
          </ApolloProvider>
        </UserContext.Provider>
      </Document>
    </ThemeProvider>
  );
}
