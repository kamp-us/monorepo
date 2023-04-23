import {
  darkTheme,
  ThemeProvider,
  ToastProvider,
  ToastViewport,
  useClientStyle,
} from "@kampus/ui";
import { User } from "@prisma/client";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { useEffect } from "react";
import { authenticator } from "~/authenticator.server";
import * as gtag from "~/features/analytics/gtag.client";
import {
  ConfigContextManager,
  useConfigContext,
} from "~/features/config/config-context";
import { env } from "~/utils/env.server";
import { favicons } from "./features/assets/favicons";
import loadingIndicatorStyles from "./features/loading-indicator/loading-indicator.css";
import { useLoadingIndicator } from "./features/loading-indicator/useLoadingIndicator";
import { Topnav } from "./features/topnav/Topnav";
import { getUserById } from "./models/user.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: loadingIndicatorStyles },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    { rel: "apple-touch-icon", href: favicons.apple, sizes: "180x180" },
    { rel: "icon", href: favicons[32], sizes: "32x32", type: "image/png" },
    { rel: "icon", href: favicons[16], sizes: "16x16", type: "image/png" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "kamp.us pano",
  viewport: "width=device-width,initial-scale=1",
  "twitter:image": favicons.logo,
  "og:image": favicons.logo,
});

export const loader = async ({ request }: LoaderArgs) => {
  const sessionUser = (await authenticator.isAuthenticated(
    request
  )) as User | null;

  const user = sessionUser ? await getUserById(sessionUser.id) : null;

  const gaTrackingID = env.GA_TRACKING_ID;
  const baseUrl = env.BASE_URL;
  const isDevelopment = env.NODE_ENV === "development";
  return json({
    user,
    gaTrackingID,
    baseUrl,
    isDevelopment,
  });
};

const Document = () => {
  const { gaTrackingID } = useLoaderData<typeof loader>();
  const clientStyle = useClientStyle();
  const location = useLocation();
  const { isDevelopment } = useConfigContext();

  useLoadingIndicator();

  useEffect(() => {
    clientStyle.reset();
  }, [clientStyle]);

  useEffect(() => {
    if (gaTrackingID) {
      gtag.pageview(location.pathname, gaTrackingID);
    }
  }, [location, gaTrackingID]);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
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
      <body className={darkTheme}>
        {isDevelopment || !gaTrackingID ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingID}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaTrackingID}', {
page_path: window.location.pathname,
});
`,
              }}
            />
          </>
        )}
        <Topnav />
        <ToastViewport />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  const { isDevelopment, baseUrl, gaTrackingID } =
  useLoaderData<typeof loader>();

  const config = { isDevelopment, baseUrl, gaTrackingID };

  return (
    <ThemeProvider>
      <ToastProvider swipeDirection="right">
        <ConfigContextManager config={config}>
          <Document />
        </ConfigContextManager>
      </ToastProvider>
    </ThemeProvider>
  );
}
