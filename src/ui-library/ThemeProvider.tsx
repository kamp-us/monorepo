import type { FC } from "react";
import { createContext, useContext, useMemo, useState } from "react";

type ThemeVariants = "light" | "dark";

type ThemeContextProps = {
  theme: ThemeVariants;
  setTheme: React.Dispatch<React.SetStateAction<ThemeVariants>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants>("dark");

  const context = useMemo(() => ({ theme, setTheme }), [theme]);

  console.log({ theme });

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
