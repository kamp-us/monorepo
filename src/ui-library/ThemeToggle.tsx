import type { FC } from "react";

import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "./IconButton";

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  const onClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isDark = theme === "dark";

  return (
    <IconButton
      onClick={onClick}
      aria-label="toggle a light and dark color scheme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
