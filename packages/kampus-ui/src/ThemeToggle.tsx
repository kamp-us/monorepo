import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import type { FC } from "react";
import React from "react";

import { IconButton } from "./IconButton";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    if (theme === "DARK") {
      
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  };

  const isDark = theme === "DARK";

  return (
    <IconButton
      onClick={onClick}
      aria-label="toggle a light and dark color scheme"
      type="submit"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
