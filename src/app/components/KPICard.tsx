import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  trend: {
    direction: "up" | "down";
    percentage: string;
  };
  subtext: string;
  onClick: () => void;
}

export function KPICard({ label, value, trend, subtext, onClick }: KPICardProps) {
  return (
    <button
      onClick={onClick}
      className="group p-6 rounded-lg border transition-all hover:shadow-lg text-left"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.boxShadow = "0 0 0 3px var(--hover-glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* KPI Label */}
      <div
        className="text-sm mb-2"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </div>

      {/* KPI Value */}
      <div
        className="text-4xl font-bold mb-1"
        style={{ color: "var(--text-primary)" }}
      >
        {value}
      </div>

      {/* Trend Indicator */}
      <div className="flex items-center gap-1 mb-3">
        {trend.direction === "up" ? (
          <TrendingUp className="w-4 h-4" style={{ color: "var(--accent)" }} />
        ) : (
          <TrendingDown className="w-4 h-4" style={{ color: "var(--accent)" }} />
        )}
        <span
          className="text-xs font-medium"
          style={{ color: "var(--accent)" }}
        >
          {trend.percentage} vs last period
        </span>
      </div>

      {/* Subtext */}
      <div
        className="text-xs mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {subtext}
      </div>

      {/* View Details Link */}
      <div
        className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: "var(--accent)" }}
      >
        View details
        <ArrowRight className="w-3 h-3" />
      </div>
    </button>
  );
}
