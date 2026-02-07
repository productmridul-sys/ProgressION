import { ChevronDown } from "lucide-react";

interface TimeRangeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export function TimeRangeDropdown({ value, onChange }: TimeRangeDropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-semibold"
        style={{ 
          color: "var(--text-secondary)",
          fontSize: "16px",
        }}
      >
        Time range
      </label>
      <div className="relative">
        <select
          id="dd_time_range"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none px-4 py-2.5 pr-10 rounded-lg border cursor-pointer transition-all"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
            fontSize: "14px",
          }}
        >
          <option value="6months">6 months</option>
          <option value="1year">1 year</option>
          <option value="2year">2 year</option>
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "var(--text-secondary)" }}
        />
      </div>
    </div>
  );
}