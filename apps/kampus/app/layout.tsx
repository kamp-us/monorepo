import { type ReactNode } from "react";
import { Inter } from "next/font/google";

import { Toaster } from "@kampus/ui";

import { RelayEnvironmentProvider } from "~/features/relay/RelayEnvironmentProvider";

import "./globals.css";

import { ThemeProvider } from "@kampus/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kamp.us",
  description: "topluluk",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RelayEnvironmentProvider>{children}</RelayEnvironmentProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
