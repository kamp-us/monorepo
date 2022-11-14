import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";
import {
  ThemeProvider,
  ToastProvider,
  ToastViewport,
  useClientStyle,
  useTheme,
} from "~/ui-library";
import { UserContextManager } from "./features/auth/user-context";
import loadingIndicatorStyles from "./features/loading-indicator/loading-indicator.css";
import { useLoadingIndicator } from "./features/loading-indicator/useLoadingIndicator";
import { Topnav } from "./features/topnav/Topnav";
import { getUser } from "./session.server";
import { darkTheme } from "./stitches.config";

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>;
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: loadingIndicatorStyles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "kamp.us pano",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
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
        {/* eslint-disable-next-line turbo/no-undeclared-env-vars */}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

export default function App() {
  const { user } = useLoaderData<LoaderData>();
  return (
    <ThemeProvider>
      <ToastProvider swipeDirection="right">
        <Document>
          <UserContextManager user={user}>
            <Topnav />
            <ToastViewport />
            <Outlet />
          </UserContextManager>
        </Document>
      </ToastProvider>
    </ThemeProvider>
  );
}
