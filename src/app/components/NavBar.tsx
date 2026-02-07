import { Moon, Sun, User, ChevronDown } from "lucide-react";

interface NavBarProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function NavBar({ isDark, onThemeToggle }: NavBarProps) {
  const navItems = [
    { name: "Overview", active: true },
    { name: "Clients", active: false },
    { name: "Products", active: false },
    { name: "Decisions", active: false },
    { name: "Settings", active: false },
  ];

  return (
    <nav
      className="sticky top-0 z-50 px-8 py-4 flex items-center justify-between border-b"
      style={{
        backgroundColor: "var(--navbar)",
        borderColor: "var(--border)",
        boxShadow: isDark ? "none" : "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left: Logo + Title */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <span className="font-bold text-sm">DBX</span>
          </div>
          <span
            className="font-semibold text-base"
            style={{ color: "var(--text-primary)" }}
          >
            Marketing Insights Console
          </span>
        </div>
      </div>

      {/* Center: Nav Items */}
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            className="relative px-3 py-2 transition-colors"
            style={{
              color: item.active
                ? "var(--accent)"
                : "var(--text-secondary)",
            }}
          >
            {item.name}
            {item.active && (
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ backgroundColor: "var(--accent)" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Right: Theme Toggle + User */}
      <div className="flex items-center gap-4">
        <button
          onClick={onThemeToggle}
          className="p-2 rounded-lg transition-all hover:scale-105"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--accent)",
          }}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-2 pl-4 border-l" style={{ borderColor: "var(--border)" }}>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--accent)" }}
          >
            <User className="w-4 h-4 text-white" />
          </div>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-primary)" }}
          >
            Admin User
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: "var(--text-secondary)" }} />
        </div>
      </div>
    </nav>
  );
}
