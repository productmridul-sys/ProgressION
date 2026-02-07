import { X } from "lucide-react";
import { useEffect } from "react";

interface KPIModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  definition: string;
  chartData?: {
    labels: string[];
    values: number[];
  };
}

export function KPIModal({ isOpen, onClose, title, definition, chartData }: KPIModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 p-6 rounded-lg shadow-2xl"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              {title} – Breakdown
            </h2>
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {definition}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-opacity-10"
            style={{
              backgroundColor: "var(--hover-glow)",
              color: "var(--text-secondary)",
            }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chart Placeholder */}
        {chartData && (
          <div
            className="p-8 rounded-lg mb-4"
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-end justify-around gap-4 h-48">
              {chartData.values.map((value, index) => {
                const maxValue = Math.max(...chartData.values);
                const heightPercentage = (value / maxValue) * 100;
                
                return (
                  <div key={index} className="flex flex-col items-center gap-2 flex-1">
                    <div className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                      {value.toFixed(1)}%
                    </div>
                    <div
                      className="w-full rounded-t transition-all"
                      style={{
                        height: `${heightPercentage}%`,
                        backgroundColor: "var(--accent)",
                        minHeight: "8px",
                      }}
                    />
                    <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {chartData.labels[index]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div
          className="text-sm p-4 rounded-lg"
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          <p className="mb-2">
            <strong style={{ color: "var(--text-primary)" }}>Analysis period:</strong> Last 30 days
          </p>
          <p>
            <strong style={{ color: "var(--text-primary)" }}>Data source:</strong> All 11 product categories aggregated
          </p>
        </div>
      </div>
    </div>
  );
}
