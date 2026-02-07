import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";

interface SimpleNavBarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function SimpleNavBar({ isDark, onThemeToggle }: SimpleNavBarProps) {
  return (
    <nav
      className="h-12 px-10 flex items-center justify-between border-b"
      style={{
        backgroundColor: "var(--navbar)",
        borderColor: "var(--border)",
        boxShadow: isDark ? "none" : "0 1px 2px rgba(0,0,0,0.04)",
      }}
    >
      {/* Left: Logo + Navigation Links */}
      <div className="flex items-center gap-8">
        <div
          className="w-7 h-7 rounded flex items-center justify-center text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <span className="font-bold text-xs">DBX</span>
        </div>
        
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-all hover:opacity-80 ${
                isActive ? "font-semibold" : ""
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-primary)",
            })}
          >
            Overview
          </NavLink>
          
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `text-sm transition-all hover:opacity-80 ${
                isActive ? "font-semibold" : ""
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-primary)",
            })}
          >
            Clients
          </NavLink>
          
          <NavLink
            to="/demographics"
            className={({ isActive }) =>
              `text-sm transition-all hover:opacity-80 ${
                isActive ? "font-semibold" : ""
              }`
            }
            style={({ isActive }) => ({
              color: isActive ? "var(--accent)" : "var(--text-primary)",
            })}
          >
            Demographics
          </NavLink>
        </div>
      </div>

      {/* Right: Theme Toggle */}
      <button
        onClick={onThemeToggle}
        className="p-2 rounded-lg transition-all hover:scale-105"
        style={{
          backgroundColor: "var(--hover-glow)",
          color: "var(--accent)",
        }}
        aria-label="Toggle theme"
        id="btn_theme_toggle"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    </nav>
  );
}