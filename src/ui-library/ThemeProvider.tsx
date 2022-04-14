import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { darkTheme } from "../stitches.config";

type ThemeVariants = "light" | "dark";

type ThemeContextProps = {
  theme: ThemeVariants;
  setTheme: React.Dispatch<React.SetStateAction<ThemeVariants>>;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants>("light");

  const context = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add(darkTheme);
    } else {
      document.body.classList.remove(darkTheme);
    }
  }, [theme]);

  console.log({ theme });

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
