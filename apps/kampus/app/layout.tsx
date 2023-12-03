import { type ReactNode } from "react";
import { Inter } from "next/font/google";

import { Toaster } from "@kampus/ui";

import { RelayEnvironmentProvider } from "~/features/relay/RelayEnvironmentProvider";

import "./globals.css";

import { ThemeProvider } from "@kampus/ui";
import { cn } from "~/../../packages/ui/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "kamp.us",
  description: "topluluk",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <RelayEnvironmentProvider>{children}</RelayEnvironmentProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
