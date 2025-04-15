import { createContext } from "react";

export const themeContext = createContext();
themeContext.displayName = "Theme";

export function ThemeProvider({ children }) {}
