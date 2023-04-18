import { darkTheme, ThemeProvider, useClientStyle, useTheme } from "@kampus/ui";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { favicons } from "./features/assets/favicons";
import { Topnav } from "./features/topnav/Topnav";

export const links: LinksFunction = () => {
  return [
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
  title: "kamp.us kariyer",
  viewport: "width=device-width,initial-scale=1",
  "twitter:image": favicons.logo,
  "og:image": favicons.logo,
});

function Document() {
  const { theme } = useTheme();
  const clientStyle = useClientStyle();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
      <body className={theme === "DARK" ? darkTheme : ""}>
        <Topnav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Document />
    </ThemeProvider>
  );
}
