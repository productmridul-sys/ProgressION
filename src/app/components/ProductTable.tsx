interface ProductData {
  name: string;
  advertised: number;
  bought: number;
  percentAdvertised: number;
  percentBought: number;
  convertedCount: number;
  conversionRate: number;
}

interface ProductTableProps {
  selectedProduct: string | null;
  onProductClick: (productName: string) => void;
}

const productData: ProductData[] = [
  {
    name: "Home Loan",
    advertised: 956,
    bought: 47,
    percentAdvertised: 19.12,
    percentBought: 0.94,
    convertedCount: 17,
    conversionRate: 0.34,
  },
  {
    name: "Personal Loan",
    advertised: 1350,
    bought: 135,
    percentAdvertised: 27.00,
    percentBought: 2.70,
    convertedCount: 24,
    conversionRate: 0.48,
  },
  {
    name: "Auto / Vehicle Loan",
    advertised: 1767,
    bought: 116,
    percentAdvertised: 35.34,
    percentBought: 2.32,
    convertedCount: 28,
    conversionRate: 0.56,
  },
  {
    name: "Education Loan",
    advertised: 931,
    bought: 132,
    percentAdvertised: 18.62,
    percentBought: 2.64,
    convertedCount: 37,
    conversionRate: 0.74,
  },
  {
    name: "Credit Cards",
    advertised: 1360,
    bought: 337,
    percentAdvertised: 27.20,
    percentBought: 6.74,
    convertedCount: 21,
    conversionRate: 0.42,
  },
  {
    name: "Pension funds",
    advertised: 2300,
    bought: 214,
    percentAdvertised: 46.00,
    percentBought: 4.28,
    convertedCount: 37,
    conversionRate: 0.74,
  },
  {
    name: "Fixed Deposit / Term Deposit",
    advertised: 1364,
    bought: 164,
    percentAdvertised: 27.28,
    percentBought: 3.28,
    convertedCount: 14,
    conversionRate: 0.28,
  },
  {
    name: "Insurance Products",
    advertised: 1366,
    bought: 204,
    percentAdvertised: 27.32,
    percentBought: 4.08,
    convertedCount: 8,
    conversionRate: 0.16,
  },
  {
    name: "Investment / Wealth Management Accounts",
    advertised: 900,
    bought: 190,
    percentAdvertised: 18.00,
    percentBought: 3.80,
    convertedCount: 9,
    conversionRate: 0.18,
  },
  {
    name: "Overdraft Facility",
    advertised: 1363,
    bought: 201,
    percentAdvertised: 27.26,
    percentBought: 4.02,
    convertedCount: 12,
    conversionRate: 0.24,
  },
  {
    name: "Buy Now, Pay Later (BNPL) or Installment Plans",
    advertised: 1343,
    bought: 154,
    percentAdvertised: 26.86,
    percentBought: 3.08,
    convertedCount: 7,
    conversionRate: 0.14,
  },
];

export function ProductTable({ selectedProduct }: ProductTableProps) {
  // Find the selected product data
  const product = productData.find((p) => p.name === selectedProduct);

  // If no product is selected, show a message
  if (!selectedProduct || !product) {
    return (
      <div
        className="rounded-lg border p-8 text-center"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
      >
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "14px",
          }}
        >
          Please select a product to view performance data
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{
        backgroundColor: "var(--card)",
        borderColor: "var(--border)",
      }}
      id="table_product_performance"
    >
      {/* Table Title */}
      <div
        className="px-4 py-3 border-b"
        style={{
          backgroundColor: "var(--bg)",
          borderColor: "var(--border)",
        }}
      >
        <h3
          className="font-bold"
          style={{ 
            color: "var(--text-primary)",
            fontSize: "16px",
          }}
        >
          Product Performance
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              style={{
                backgroundColor: "var(--bg)",
                borderColor: "var(--border)",
              }}
            >
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                # Advertised
              </th>
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                %Advertised
              </th>
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                # Bought
              </th>
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                % Bought
              </th>
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                Converted Count
              </th>
              <th
                className="px-4 py-3 text-right font-semibold border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  fontSize: "14px",
                }}
              >
                Conversion Rate
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              style={{
                backgroundColor: "var(--card)",
              }}
            >
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                {product.advertised.toLocaleString()}
              </td>
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                }}
              >
                {product.percentAdvertised.toFixed(2)}%
              </td>
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                {product.bought.toLocaleString()}
              </td>
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                }}
              >
                {product.percentBought.toFixed(2)}%
              </td>
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--text-primary)",
                  fontSize: "14px",
                }}
              >
                {product.convertedCount}
              </td>
              <td
                className="px-4 py-3 text-right"
                style={{
                  color: "var(--accent)",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {product.conversionRate.toFixed(2)}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}