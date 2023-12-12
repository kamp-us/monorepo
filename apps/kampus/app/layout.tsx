import { type ReactNode } from "react";
import { Inter } from "next/font/google";

import { Toaster } from "@kampus/ui";

import { RelayEnvironmentProvider } from "~/features/relay/RelayEnvironmentProvider";

import "./globals.css";

import { trTR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@kampus/ui";
import { cn } from "@kampus/ui/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "kamp.us",
  description: "topluluk",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className={cn("bg-background min-h-screen font-sans antialiased", inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkProvider localization={trTR}>
            <RelayEnvironmentProvider>{children}</RelayEnvironmentProvider>
          </ClerkProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
