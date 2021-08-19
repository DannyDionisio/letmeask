import { useState, ReactNode, createContext } from "react";

type ThemeContextProps = {
  children: ReactNode;
};

type Context = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<Context>({
  theme: "",
  setTheme: () => undefined,
});

export default function ThemeProvider(props: ThemeContextProps) {
  const [theme, setTheme] = useState("");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
