import { useState } from "react";
import { Outlet } from "react-router";
import { SimpleNavBar } from "./components/SimpleNavBar";
import "../styles/banking-theme.css";

export function Layout() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`banking-dashboard min-h-screen ${isDark ? "dark" : ""}`}
      style={{ backgroundColor: "var(--bg)" }}
    >
      <SimpleNavBar isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />
      <Outlet />
    </div>
  );
}
