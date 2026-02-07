interface AttributeSliderProps {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function AttributeSlider({ id, label, value, onChange }: AttributeSliderProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Allow empty string for editing
    if (inputValue === '') {
      return;
    }
    
    const newValue = parseFloat(inputValue);
    
    // Only update if it's a valid number within range
    if (!isNaN(newValue) && newValue >= 0 && newValue <= 1) {
      onChange(newValue);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // If empty or invalid on blur, reset to current value
    if (inputValue === '' || isNaN(parseFloat(inputValue))) {
      onChange(value);
      return;
    }
    
    // Clamp the value between 0 and 1
    const newValue = parseFloat(inputValue);
    if (newValue < 0) {
      onChange(0);
    } else if (newValue > 1) {
      onChange(1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor={id}
        className="w-64 flex-shrink-0"
        style={{ 
          color: "var(--text-primary)",
          fontSize: "14px",
        }}
      >
        {label}
      </label>
      
      <input
        type="range"
        id={id}
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${value * 100}%, var(--border) ${value * 100}%, var(--border) 100%)`,
        }}
      />
      
      <input
        type="text"
        value={value.toFixed(2)}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        className="w-20 px-3 py-1.5 rounded-lg border text-center"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
          color: "var(--accent)",
          fontSize: "14px",
          fontWeight: 600,
        }}
      />
    </div>
  );
}