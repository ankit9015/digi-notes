import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const darkTheme = JSON.parse(localStorage.getItem("DARK_THEME"));
  const [isDarkTheme, setTheme] = useState(darkTheme ?? false);

  useLayoutEffect(() => {
    localStorage.setItem("DARK_THEME", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <ThemeContext.Provider value={{ isDarkTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
