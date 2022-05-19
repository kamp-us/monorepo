import { FC } from "react";

import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "~/ui-library";

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
    <Button
      css={{
        cursor: "pointer",
        color: "$gray12",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      color="transparent"
      onClick={onClick}
      aria-label="toggle a light and dark color scheme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
