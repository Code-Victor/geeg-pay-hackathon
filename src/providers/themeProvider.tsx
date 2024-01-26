import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

// A custom hook to persist state to local storage
function usePersistedState(key: string, initialState: Theme) {
  const [state, setState] = useState(() => {
    // Get the initial value from local storage or use the default one
    const storedValue = localStorage.getItem(key);
    return (storedValue ? JSON.parse(storedValue) : initialState) as Theme;
  });

  // Update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}
function effetctThemeOnHtml(theme: Theme) {
  const html = document.querySelector("html");
  if (theme === "dark") {
    html?.classList.add("dark");
  } else {
    html?.classList.remove("dark");
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use the custom hook instead of useState
  const [theme, setTheme] = usePersistedState("theme", "light");
  React.useLayoutEffect(() => {
    effetctThemeOnHtml(theme);
  }, []);
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      effetctThemeOnHtml(newTheme);
      return newTheme;
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
