"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Detect system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const stored = localStorage.getItem("theme");
    const defaultTheme = stored || (prefersDark ? "dark" : "light");

    setTheme(defaultTheme);
    document.documentElement.classList.remove("light", "dark"); // clean slate
    document.documentElement.classList.add(defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark"); // clean old class
    document.documentElement.classList.add(newTheme);
  };

  // Prevent flicker on first load
  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="transition-colors duration-300">{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext); 
}
