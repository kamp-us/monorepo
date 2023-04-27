import type { FC } from "react";
import { createContext, useContext, useMemo, useState } from "react";

type ThemeVariants = "LIGHT" | "DARK";

type ThemeContextProps = {
  theme: ThemeVariants;
  setTheme: React.Dispatch<React.SetStateAction<ThemeVariants>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: "DARK",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ initialTheme?: ThemeVariants }> = ({ children, initialTheme = "DARK" }) => {
  const [theme, setTheme] = useState<ThemeVariants>(initialTheme);
  const context = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};
