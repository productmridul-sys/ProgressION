import { useState } from "react";
import { SimpleKPICard } from "../components/SimpleKPICard";
import { ProductDropdown } from "../components/ProductDropdown";
import { ProductTable } from "../components/ProductTable";
import { TimeRangeDropdown } from "../components/TimeRangeDropdown";
import { AttributeSlider } from "../components/AttributeSlider";
import { Pagination } from "../components/Pagination";

export function Overview() {
  const [selectedKPI, setSelectedKPI] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>("Home Loan");
  const [timeRange, setTimeRange] = useState("6months");
  const [currentPage, setCurrentPage] = useState(1);

  // Attribute weights state
  const attributeNames = [
    "Age",
    "Gender",
    "Marital status",
    "Education level",
    "Number of dependents",
    "Residential status",
    "Area type",
    "Occupation",
    "Employment status",
    "Tenure years",
    "Net cashflow",
    "Avg monthly balance",
    "Income stability",
    "Recurring payments count",
    "Card usage frequency",
    "High value transactions count",
    "Spend groceries",
    "Spend travel",
    "Spend utilities",
    "Spend entertainment",
    "Spend other",
    "Existing loans",
    "Existing credit cards",
    "Credit card utilization rate",
    "Existing term deposits",
    "Login frequency",
    "Marketplace visits",
    "Abandoned journeys",
    "Pages viewed",
    "Offer click through rate",
    "Salary increase amount",
    "Large deposits count",
    "Travel indicator",
    "Missed payments",
    "Fixed deposits",
    "Fixed deposits (recent)",
  ];

  const [sliderValues, setSliderValues] = useState<Record<string, number>>(
    attributeNames.reduce((acc, name) => ({ ...acc, [name]: 0.5 }), {})
  );

  const handleSliderChange = (name: string, value: number) => {
    setSliderValues((prev) => ({ ...prev, [name]: value }));
  };

  const kpiData = [
    {
      id: "kpi_ctr_card",
      label: "Click-through rate",
      value: "1.44%",
      afterValue: "2.57%",
      change: "+1.13%",
      afterLineId: "kpi_ctr_after_line",
    },
    {
      id: "kpi_conv_card",
      label: "Conversion rate",
      value: "0.36%",
      afterValue: "1.43%",
      change: "+1.07%",
      afterLineId: "kpi_conv_after_line",
    },
    {
      id: "kpi_products_bought_card",
      label: "No. of products bought",
      value: "1816",
      afterValue: "1894",
      change: "+78",
      afterLineId: "kpi_products_after_line",
    },
    {
      id: "kpi_customers_bought_card",
      label: "Converted count",
      value: "1054",
      afterValue: "1115",
      change: "+61",
      afterLineId: "kpi_customers_after_line",
    },
  ];

  // Pagination logic
  const itemsPerPage = 6;
  const totalPages = Math.ceil(attributeNames.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAttributes = attributeNames.slice(startIndex, endIndex);

  return (
    <main className="max-w-[1200px] mx-auto px-10 py-4">
      {/* KPI Section */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {kpiData.map((kpi) => (
          <SimpleKPICard
            key={kpi.id}
            id={kpi.id}
            label={kpi.label}
            value={kpi.value}
            afterValue={kpi.afterValue}
            change={kpi.change}
            afterLineId={kpi.afterLineId}
            isSelected={selectedKPI === kpi.id}
            onClick={() => setSelectedKPI(kpi.id)}
          />
        ))}
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{ backgroundColor: "var(--border)" }}
      />

      {/* Dropdowns Row - Product (left) + Time Range (right) */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ProductDropdown
          value={selectedProduct}
          onChange={setSelectedProduct}
        />
        <TimeRangeDropdown value={timeRange} onChange={setTimeRange} />
      </div>

      {/* Product Performance Table - Full Width */}
      <div className="mb-8">
        <ProductTable
          selectedProduct={selectedProduct}
          onProductClick={setSelectedProduct}
        />
      </div>

      {/* Attribute Weights Section */}
      <div
        className="p-6 rounded-lg border"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        {/* Header */}
        <div className="mb-6">
          <h2
            className="font-bold mb-1"
            style={{ 
              color: "var(--text-primary)",
              fontSize: "16px",
            }}
          >
            Attribute Weights (Recommendation Drivers)
          </h2>
          <p
            style={{ 
              color: "var(--text-secondary)",
              fontSize: "14px",
            }}
          >
            Adjust importance of attributes for recommendation scoring
          </p>
        </div>

        {/* Sliders Grid - Show only 6 per page, one per row */}
        <div className="flex flex-col gap-4 mb-6">
          {currentAttributes.map((name) => (
            <AttributeSlider
              key={name}
              id={`slider_${name.toLowerCase().replace(/\s+/g, "_")}`}
              label={name}
              value={sliderValues[name]}
              onChange={(value) => handleSliderChange(name, value)}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </main>
  );
}