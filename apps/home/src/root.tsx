import {
  darkTheme,
  ThemeProvider,
  ToastProvider,
  ToastViewport,
  useClientStyle,
  useTheme,
} from "@kampus/ui";
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
import { UserContextManager } from "./features/auth/user-context";
import loadingIndicatorStyles from "./features/loading-indicator/loading-indicator.css";
import { useLoadingIndicator } from "./features/loading-indicator/useLoadingIndicator";
import { Topnav } from "./features/topnav/Topnav";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: loadingIndicatorStyles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "kamp.us home",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  return null
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = ({ children }: DocumentProps) => {
  const clientStyle = useClientStyle();
  const { theme } = useTheme();
  const apple_icon_url =
    "https://kampus-logo.s3.eu-central-1.amazonaws.com/apple-touch-icon.png";
  const favicon_16x16_url =
    "https://kampus-logo.s3.eu-central-1.amazonaws.com/favicon-16x16.png";
  const favicon_32x32_url =
    "https://kampus-logo.s3.eu-central-1.amazonaws.com/favicon-32x32.png";
  const kampus_logo_url =
    "https://kampus-logo.s3.eu-central-1.amazonaws.com/kampus_logo.png";
  useLoadingIndicator();

  useEffect(() => {
    clientStyle.reset();
  }, [clientStyle]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:image" content={kampus_logo_url}></meta>
        <meta name="og:image" content={kampus_logo_url}></meta>
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="apple-touch-icon" sizes="180x180" href={apple_icon_url} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={favicon_32x32_url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={favicon_16x16_url}
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
  return (
    <ThemeProvider>
      <ToastProvider swipeDirection="right">
        <Document>
          <Topnav />
          <ToastViewport />
          <Outlet />
        </Document>
      </ToastProvider>
    </ThemeProvider>
  );
}
