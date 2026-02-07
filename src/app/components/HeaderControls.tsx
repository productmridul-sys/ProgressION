import { ChevronDown } from "lucide-react";

interface HeaderControlsProps {
  dateRange: string;
  segment: string;
  channel: string;
  onDateRangeChange: (value: string) => void;
  onSegmentChange: (value: string) => void;
  onChannelChange: (value: string) => void;
}

export function HeaderControls({
  dateRange,
  segment,
  channel,
  onDateRangeChange,
  onSegmentChange,
  onChannelChange,
}: HeaderControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <Select
        value={dateRange}
        onChange={onDateRangeChange}
        options={[
          { value: "7", label: "Last 7 days" },
          { value: "30", label: "Last 30 days" },
          { value: "90", label: "Last 90 days" },
        ]}
      />
      <Select
        value={segment}
        onChange={onSegmentChange}
        options={[
          { value: "all", label: "All" },
          { value: "mass", label: "Mass" },
          { value: "affluent", label: "Affluent" },
          { value: "premium", label: "Premium" },
        ]}
      />
      <Select
        value={channel}
        onChange={onChannelChange}
        options={[
          { value: "all", label: "All" },
          { value: "mobile", label: "Mobile" },
          { value: "web", label: "Web" },
        ]}
      />
    </div>
  );
}

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none px-4 py-2 pr-10 rounded-lg border cursor-pointer transition-all text-sm"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--text-primary)",
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: "var(--text-secondary)" }}
      />
    </div>
  );
}
