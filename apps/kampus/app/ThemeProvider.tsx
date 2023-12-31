"use client";

import { type PropsWithChildren } from "react";
import {
  Theme,
  // ThemePanel
} from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

import { ThemeProvider as KampusThemeProvider } from "@kampus/ui";

export function ThemeProvider(props: PropsWithChildren) {
  return (
    <KampusThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Theme>{props.children}</Theme>
    </KampusThemeProvider>
  );
}
