import { ChevronDown } from "lucide-react";

interface ProductDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

const products = [
  "Home Loan",
  "Personal Loan",
  "Auto / Vehicle Loan",
  "Education Loan",
  "Credit Cards",
  "Pension funds",
  "Fixed Deposit / Term Deposit",
  "Insurance Products",
  "Investment / Wealth Management Accounts",
  "Overdraft Facility",
  "Buy Now, Pay Later (BNPL) or Installment Plans",
];

export function ProductDropdown({ value, onChange }: ProductDropdownProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="font-semibold"
        style={{ 
          color: "var(--text-secondary)",
          fontSize: "16px",
        }}
      >
        Select product
      </label>
      <div className="relative">
        <select
          id="dd_product_select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full px-4 py-2.5 pr-10 rounded-lg border cursor-pointer transition-all"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
            color: "var(--text-primary)",
            fontSize: "14px",
          }}
        >
          <option value="">Choose a product...</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: "var(--text-secondary)" }}
        />
      </div>
    </div>
  );
}