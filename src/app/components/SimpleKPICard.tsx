interface SimpleKPICardProps {
  label: string;
  value: string;
  id: string;
  isSelected: boolean;
  onClick: () => void;
  afterValue?: string;
  change?: string;
  afterLineId?: string;
}

export function SimpleKPICard({ label, value, id, isSelected, onClick, afterValue, change, afterLineId }: SimpleKPICardProps) {
  return (
    <button
      onClick={onClick}
      id={id}
      className="group p-5 rounded-lg border transition-all hover:shadow-md text-left"
      style={{
        backgroundColor: "var(--card)",
        borderColor: isSelected ? "var(--accent)" : "var(--border)",
        borderWidth: isSelected ? "2px" : "1px",
      }}
    >
      {/* KPI Label */}
      <div
        className="font-bold mb-2"
        style={{ 
          color: "var(--text-secondary)",
          fontSize: "17px",
        }}
      >
        {label}
      </div>

      {/* Divider */}
      <div
        className="h-px mb-3"
        style={{ backgroundColor: "var(--border)" }}
      />

      {/* KPI Value */}
      <div
        style={{ 
          color: "var(--text-primary)",
          fontSize: "16px",
        }}
      >
        {value}
      </div>

      {/* After 1 Year Green Line */}
      {afterValue && change && (
        <div
          id={afterLineId}
          className="mt-2"
          style={{
            color: "var(--success-green)",
            fontSize: "12px",
            fontWeight: "500",
            lineHeight: "16px",
          }}
        >
          After 1 Year: {afterValue} ({change})
        </div>
      )}
    </button>
  );
}