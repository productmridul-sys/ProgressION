import { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type ViewMode = "tables" | "charts";

interface DemographicTableProps {
  columns: string[];
  rows: (string | number)[][];
  id: string;
}

function DemographicTable({ columns, rows, id }: DemographicTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full" id={id}>
        <thead>
          <tr
            style={{
              backgroundColor: "var(--table-header-bg)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left font-semibold"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="group hover:bg-opacity-80 transition-colors"
              style={{
                backgroundColor:
                  rowIdx % 2 === 0
                    ? "var(--table-row-even)"
                    : "var(--table-row-odd)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3"
                  style={{
                    color: "var(--text-primary)",
                    fontSize: "14px",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface DemographicCardProps {
  id: string;
  title: string;
  caption: string;
  columns: string[];
  rows: (string | number)[][];
  tableId: string;
  chartId: string;
  chartData: any[];
  chartDataKey: string;
  chartCategoryKey: string;
  chartHeight: number;
  chartDomain?: [number, number];
  viewMode: ViewMode;
  note?: string;
}

function DemographicCard({
  id,
  title,
  caption,
  columns,
  rows,
  tableId,
  chartId,
  chartData,
  chartDataKey,
  chartCategoryKey,
  chartHeight,
  chartDomain,
  viewMode,
  note,
}: DemographicCardProps) {
  const CustomLabel = (props: any) => {
    const { x, y, width, value } = props;
    return (
      <text
        x={x + width + 8}
        y={y + 10}
        fill="var(--text-primary)"
        fontSize="12px"
        fontWeight="500"
      >
        {value}%
      </text>
    );
  };

  return (
    <div
      id={id}
      className="rounded-lg border p-6"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Section Title */}
      <h3
        className="font-bold mb-2"
        style={{
          color: "var(--text-primary)",
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      {/* Caption */}
      <p
        className="mb-4"
        style={{
          color: "var(--text-secondary)",
          fontSize: "13px",
        }}
      >
        {caption}
      </p>

      {/* Content - Table or Chart */}
      {viewMode === "tables" ? (
        <DemographicTable columns={columns} rows={rows} id={tableId} />
      ) : (
        <div>
          <ResponsiveContainer width="100%" height={chartHeight}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
              id={chartId}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--border)"
                horizontal={false}
              />
              <XAxis
                type="number"
                stroke="var(--text-secondary)"
                fontSize={12}
                domain={chartDomain || [0, "auto"]}
                tickFormatter={(value) => `${value}%`}
              />
              <YAxis
                type="category"
                dataKey={chartCategoryKey}
                stroke="var(--text-secondary)"
                fontSize={12}
                width={chartCategoryKey === "type" ? 120 : chartCategoryKey === "category" ? 100 : 80}
              />
              <Bar
                dataKey={chartDataKey}
                fill="var(--accent)"
                radius={[0, 4, 4, 0]}
                label={<CustomLabel />}
              />
            </BarChart>
          </ResponsiveContainer>
          {note && (
            <p
              className="mt-2 text-xs italic"
              style={{ color: "var(--text-secondary)" }}
            >
              {note}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function Demographics() {
  const [viewMode, setViewMode] = useState<ViewMode>("tables");
  const ageRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const balanceRef = useRef<HTMLDivElement>(null);
  const loansRef = useRef<HTMLDivElement>(null);
  const spendRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Chart data
  const ageChartData = [
    { range: "18–30", percent: 18.62 },
    { range: "30–50", percent: 28.6 },
    { range: "50–70", percent: 26.8 },
    { range: "70–90", percent: 25.98 },
  ];

  const areaChartData = [
    { type: "Rural", percent: 32.82 },
    { type: "Suburban/Urban", percent: 67.18 },
  ];

  const balanceChartData = [
    { range: "0–999", percent: 9 },
    { range: "1000–1999", percent: 24 },
    { range: "2000–2999", percent: 25 },
    { range: "3000–3999", percent: 16 },
    { range: "4000–4999", percent: 10 },
    { range: "5000–5999", percent: 7 },
    { range: "6000–6999", percent: 4 },
    { range: "7000–7999", percent: 3 },
    { range: "8000–8999", percent: 2 },
    { range: "9000+", percent: 1 },
  ];

  const loansChartData = [
    { count: "0", percent: 35.4 },
    { count: "1", percent: 42.34 },
    { count: "2", percent: 19.58 },
    { count: "3", percent: 2.68 },
  ];

  const spendChartData = [
    { category: "Groceries", percent: 20.01 },
    { category: "Travel", percent: 19.3 },
    { category: "Utilities", percent: 20.21 },
    { category: "Entertainment", percent: 20.33 },
    { category: "Other", percent: 20.15 },
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-10 py-6">
      {/* Page Header with View Toggle */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2
            className="font-bold mb-1"
            style={{
              color: "var(--text-primary)",
              fontSize: "20px",
            }}
          >
            Customer Demographics
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "13px",
            }}
          >
            Distribution by customer attributes (n = 5000)
          </p>
        </div>

        {/* View Toggle - Segmented Control */}
        <div
          className="flex rounded-lg p-1"
          style={{
            backgroundColor: "var(--hover-glow)",
            border: "1px solid var(--border)",
          }}
        >
          <button
            id="toggle_view_tables"
            onClick={() => setViewMode("tables")}
            className="px-4 py-2 rounded-md transition-all text-sm font-medium"
            style={{
              backgroundColor:
                viewMode === "tables" ? "var(--accent)" : "transparent",
              color: viewMode === "tables" ? "#FFFFFF" : "var(--text-primary)",
            }}
          >
            Tables
          </button>
          <button
            id="toggle_view_charts"
            onClick={() => setViewMode("charts")}
            className="px-4 py-2 rounded-md transition-all text-sm font-medium"
            style={{
              backgroundColor:
                viewMode === "charts" ? "var(--accent)" : "transparent",
              color: viewMode === "charts" ? "#FFFFFF" : "var(--text-primary)",
            }}
          >
            Charts
          </button>
        </div>
      </div>

      {/* Quick Navigation Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          id="jump_age"
          onClick={() => scrollToSection(ageRef)}
          className="px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--text-primary)",
            fontSize: "13px",
            border: "1px solid var(--border)",
          }}
        >
          Age
        </button>
        <button
          id="jump_area"
          onClick={() => scrollToSection(areaRef)}
          className="px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--text-primary)",
            fontSize: "13px",
            border: "1px solid var(--border)",
          }}
        >
          Area Type
        </button>
        <button
          id="jump_balance"
          onClick={() => scrollToSection(balanceRef)}
          className="px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--text-primary)",
            fontSize: "13px",
            border: "1px solid var(--border)",
          }}
        >
          Avg Monthly Balance
        </button>
        <button
          id="jump_loans"
          onClick={() => scrollToSection(loansRef)}
          className="px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--text-primary)",
            fontSize: "13px",
            border: "1px solid var(--border)",
          }}
        >
          Existing Loans
        </button>
        <button
          id="jump_spend"
          onClick={() => scrollToSection(spendRef)}
          className="px-3 py-1.5 rounded-md transition-all"
          style={{
            backgroundColor: "var(--hover-glow)",
            color: "var(--text-primary)",
            fontSize: "13px",
            border: "1px solid var(--border)",
          }}
        >
          Spend Distribution
        </button>
      </div>

      {/* Demographic Sections - Vertical Stack */}
      <div className="flex flex-col gap-7">
        {/* Section 1: Age Distribution */}
        <div ref={ageRef}>
          <DemographicCard
            id="card_age"
            title="Age Distribution"
            caption="Customer age buckets and share of total customers."
            columns={["Age Range", "Count", "Distribution (%)"]}
            rows={[
              ["18–30", "931", "18.62%"],
              ["30–50", "1,430", "28.60%"],
              ["50–70", "1,340", "26.80%"],
              ["70–90", "1,299", "25.98%"],
            ]}
            tableId="table_age"
            chartId="chart_age"
            chartData={ageChartData}
            chartDataKey="percent"
            chartCategoryKey="range"
            chartHeight={240}
            chartDomain={[0, 35]}
            viewMode={viewMode}
          />
        </div>

        {/* Section 2: Area Type Distribution */}
        <div ref={areaRef}>
          <DemographicCard
            id="card_area"
            title="Area Type Distribution"
            caption="Customer location category split."
            columns={["Area Type", "Count", "Distribution (%)"]}
            rows={[
              ["Rural", "1,641", "32.82%"],
              ["Suburban/Urban", "3,359", "67.18%"],
            ]}
            tableId="table_area"
            chartId="chart_area"
            chartData={areaChartData}
            chartDataKey="percent"
            chartCategoryKey="type"
            chartHeight={160}
            chartDomain={[0, 80]}
            viewMode={viewMode}
          />
        </div>

        {/* Section 3: Average Monthly Balance Distribution */}
        <div ref={balanceRef}>
          <DemographicCard
            id="card_balance"
            title="Avg Monthly Balance Distribution"
            caption="Customer balance buckets (Avg_monthly_balance)."
            columns={["Balance Range", "Count", "Distribution (%)"]}
            rows={[
              ["0–999", "465", "9%"],
              ["1000–1999", "1,176", "24%"],
              ["2000–2999", "1,232", "25%"],
              ["3000–3999", "791", "16%"],
              ["4000–4999", "493", "10%"],
              ["5000–5999", "338", "7%"],
              ["6000–6999", "209", "4%"],
              ["7000–7999", "138", "3%"],
              ["8000–8999", "115", "2%"],
              ["9000+", "43", "1%"],
            ]}
            tableId="table_balance"
            chartId="chart_balance"
            chartData={balanceChartData}
            chartDataKey="percent"
            chartCategoryKey="range"
            chartHeight={360}
            chartDomain={[0, 30]}
            viewMode={viewMode}
          />
        </div>

        {/* Section 4: Existing Loans Count Distribution */}
        <div ref={loansRef}>
          <DemographicCard
            id="card_loans"
            title="Existing Loans Count Distribution"
            caption="How many existing loans customers have."
            columns={["Existing Loan Count", "Count", "Distribution (%)"]}
            rows={[
              ["0", "1,770", "35.40%"],
              ["1", "2,117", "42.34%"],
              ["2", "979", "19.58%"],
              ["3", "134", "2.68%"],
            ]}
            tableId="table_loans"
            chartId="chart_loans"
            chartData={loansChartData}
            chartDataKey="percent"
            chartCategoryKey="count"
            chartHeight={220}
            chartDomain={[0, 50]}
            viewMode={viewMode}
            note="Most customers have 0–1 existing loans"
          />
        </div>

        {/* Section 5: Spend Distribution */}
        <div ref={spendRef}>
          <DemographicCard
            id="card_spend"
            title="Spend Distribution (Average Share)"
            caption="Average spend distribution across categories."
            columns={["Spend Category", "Distribution (%)"]}
            rows={[
              ["Groceries", "20.01%"],
              ["Travel", "19.30%"],
              ["Utilities", "20.21%"],
              ["Entertainment", "20.33%"],
              ["Other", "20.15%"],
            ]}
            tableId="table_spend"
            chartId="chart_spend"
            chartData={spendChartData}
            chartDataKey="percent"
            chartCategoryKey="category"
            chartHeight={240}
            chartDomain={[18, 22]}
            viewMode={viewMode}
          />
        </div>
      </div>
    </main>
  );
}
