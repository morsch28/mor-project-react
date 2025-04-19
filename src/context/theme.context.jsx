import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const themeContext = createContext();
themeContext.displayName = "Theme";

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setMode(saved);
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode == "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <themeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </themeContext.Provider>
  );
}

export function useTheme() {
  return useContext(themeContext);
}
