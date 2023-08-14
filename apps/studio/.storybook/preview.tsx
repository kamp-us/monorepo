import "@kampus-apps/kampus/app/globals.css";
import "../styles.css";

import React from "react";
import type { StoryContext, StoryFn } from "@storybook/react";

import { Toaster } from "@kampus/ui-next";
import { ThemeProvider } from "@kampus/ui-next/components/theme-provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    clearable: false,
    list: [
      {
        name: "Light",
        class: [],
        color: "#ffffff",
        default: true,
      },
      {
        name: "Dark",
        // The class dark will be added to the body tag
        class: ["dark"],
        color: "#000000",
      },
    ],
  },
};

const withThemeProvider = (StoryFn: StoryFn) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <StoryFn />
      <Toaster />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
