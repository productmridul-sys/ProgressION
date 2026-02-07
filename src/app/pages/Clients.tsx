import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// First 10 customers with exact data
const customersPage1 = [
  {
    Client_ID: "C0001",
    Age: 69,
    Gender: "Other",
    Marital_status: "Widowed",
    Education_level: "Bachelors",
    Num_dependents: 4,
    Residential_status: "Owned",
    Area_type: "Suburban",
    Occupation: "Retired",
    Employment_status: "Retired",
    Tenure_years: 30,
    Net_cashflow: 375,
    Avg_monthly_balance: 1800,
    Income_stability: "Low",
    Recurring_payments_count: 1,
    Card_usage_frequency: 7,
    High_value_transactions_count: 1,
    Spend_groceries_pct: 0.476934,
    Spend_travel_pct: 0.018734,
    Spend_utilities_pct: 0.305348,
    Spend_entertainment_pct: 0.158545,
    Spend_other_pct: 0.040439,
    Existing_loans_count: 1,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.17035,
    Existing_term_deposits_count: 2,
    Login_frequency: 46,
    Marketplace_visits: 13,
    Abandoned_journeys: 7,
    Pages_viewed: 94,
    Offer_click_through_rate: 0.050023,
    Salary_increase_amount: 428,
    Large_deposits_count: 0,
    Travel_indicator_6m: 1,
    Missed_payments_count: 0,
    Fixed_deposits_count: 3,
  },
  {
    Client_ID: "C0002",
    Age: 32,
    Gender: "Female",
    Marital_status: "Single",
    Education_level: "Masters",
    Num_dependents: 0,
    Residential_status: "Mortgaged",
    Area_type: "Suburban",
    Occupation: "Teacher",
    Employment_status: "Employed",
    Tenure_years: 2,
    Net_cashflow: -139,
    Avg_monthly_balance: 1517,
    Income_stability: "Medium",
    Recurring_payments_count: 1,
    Card_usage_frequency: 12,
    High_value_transactions_count: 2,
    Spend_groceries_pct: 0.333285,
    Spend_travel_pct: 0.080595,
    Spend_utilities_pct: 0.241869,
    Spend_entertainment_pct: 0.070753,
    Spend_other_pct: 0.273498,
    Existing_loans_count: 1,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.086545,
    Existing_term_deposits_count: 0,
    Login_frequency: 57,
    Marketplace_visits: 17,
    Abandoned_journeys: 6,
    Pages_viewed: 83,
    Offer_click_through_rate: 0.051767,
    Salary_increase_amount: 274,
    Large_deposits_count: 1,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 0,
  },
  {
    Client_ID: "C0003",
    Age: 89,
    Gender: "Male",
    Marital_status: "Widowed",
    Education_level: "Bachelors",
    Num_dependents: 3,
    Residential_status: "Owned",
    Area_type: "Urban",
    Occupation: "Retired",
    Employment_status: "Retired",
    Tenure_years: 36,
    Net_cashflow: 238,
    Avg_monthly_balance: 2538,
    Income_stability: "Low",
    Recurring_payments_count: 2,
    Card_usage_frequency: 9,
    High_value_transactions_count: 1,
    Spend_groceries_pct: 0.342407,
    Spend_travel_pct: 0.051426,
    Spend_utilities_pct: 0.354763,
    Spend_entertainment_pct: 0.071836,
    Spend_other_pct: 0.179569,
    Existing_loans_count: 1,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.19836,
    Existing_term_deposits_count: 0,
    Login_frequency: 52,
    Marketplace_visits: 29,
    Abandoned_journeys: 5,
    Pages_viewed: 89,
    Offer_click_through_rate: 0.003313,
    Salary_increase_amount: 112,
    Large_deposits_count: 0,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 1,
  },
  {
    Client_ID: "C0004",
    Age: 78,
    Gender: "Female",
    Marital_status: "Married",
    Education_level: "Bachelors",
    Num_dependents: 3,
    Residential_status: "Owned",
    Area_type: "Rural",
    Occupation: "Retired",
    Employment_status: "Retired",
    Tenure_years: 23,
    Net_cashflow: 447,
    Avg_monthly_balance: 1546,
    Income_stability: "Low",
    Recurring_payments_count: 1,
    Card_usage_frequency: 9,
    High_value_transactions_count: 1,
    Spend_groceries_pct: 0.09969,
    Spend_travel_pct: 0.011888,
    Spend_utilities_pct: 0.127152,
    Spend_entertainment_pct: 0.41047,
    Spend_other_pct: 0.350801,
    Existing_loans_count: 1,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.338386,
    Existing_term_deposits_count: 1,
    Login_frequency: 62,
    Marketplace_visits: 28,
    Abandoned_journeys: 8,
    Pages_viewed: 97,
    Offer_click_through_rate: 0.056926,
    Salary_increase_amount: 389,
    Large_deposits_count: 1,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 1,
  },
  {
    Client_ID: "C0005",
    Age: 38,
    Gender: "Female",
    Marital_status: "Married",
    Education_level: "Masters",
    Num_dependents: 0,
    Residential_status: "Rented",
    Area_type: "Urban",
    Occupation: "Teacher",
    Employment_status: "Employed",
    Tenure_years: 13,
    Net_cashflow: 1043,
    Avg_monthly_balance: 4969,
    Income_stability: "Medium",
    Recurring_payments_count: 4,
    Card_usage_frequency: 21,
    High_value_transactions_count: 4,
    Spend_groceries_pct: 0.1833,
    Spend_travel_pct: 0.074938,
    Spend_utilities_pct: 0.304303,
    Spend_entertainment_pct: 0.320783,
    Spend_other_pct: 0.116676,
    Existing_loans_count: 1,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.451768,
    Existing_term_deposits_count: 0,
    Login_frequency: 52,
    Marketplace_visits: 20,
    Abandoned_journeys: 7,
    Pages_viewed: 105,
    Offer_click_through_rate: 0.004616,
    Salary_increase_amount: -60,
    Large_deposits_count: 0,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 1,
  },
  {
    Client_ID: "C0006",
    Age: 41,
    Gender: "Male",
    Marital_status: "Married",
    Education_level: "Masters",
    Num_dependents: 4,
    Residential_status: "Mortgaged",
    Area_type: "Suburban",
    Occupation: "Engineer",
    Employment_status: "Employed",
    Tenure_years: 19,
    Net_cashflow: 357,
    Avg_monthly_balance: 6351,
    Income_stability: "High",
    Recurring_payments_count: 6,
    Card_usage_frequency: 24,
    High_value_transactions_count: 4,
    Spend_groceries_pct: 0.449685,
    Spend_travel_pct: 0.218057,
    Spend_utilities_pct: 0.263556,
    Spend_entertainment_pct: 0.068573,
    Spend_other_pct: 0.000129,
    Existing_loans_count: 0,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.451064,
    Existing_term_deposits_count: 1,
    Login_frequency: 41,
    Marketplace_visits: 21,
    Abandoned_journeys: 7,
    Pages_viewed: 89,
    Offer_click_through_rate: 0.008518,
    Salary_increase_amount: 677,
    Large_deposits_count: 0,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 1,
  },
  {
    Client_ID: "C0007",
    Age: 20,
    Gender: "Male",
    Marital_status: "Single",
    Education_level: "High School",
    Num_dependents: 1,
    Residential_status: "Mortgaged",
    Area_type: "Rural",
    Occupation: "Student",
    Employment_status: "Student",
    Tenure_years: 3,
    Net_cashflow: -35,
    Avg_monthly_balance: 1841,
    Income_stability: "Low",
    Recurring_payments_count: 1,
    Card_usage_frequency: 6,
    High_value_transactions_count: 1,
    Spend_groceries_pct: 0.37022,
    Spend_travel_pct: 0.319096,
    Spend_utilities_pct: 0.024272,
    Spend_entertainment_pct: 0.08651,
    Spend_other_pct: 0.199903,
    Existing_loans_count: 2,
    Existing_credit_cards_count: 0,
    Credit_card_utilization_rate: 0.059204,
    Existing_term_deposits_count: 0,
    Login_frequency: 57,
    Marketplace_visits: 22,
    Abandoned_journeys: 2,
    Pages_viewed: 99,
    Offer_click_through_rate: 0.050402,
    Salary_increase_amount: 175,
    Large_deposits_count: 1,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 0,
  },
  {
    Client_ID: "C0008",
    Age: 39,
    Gender: "Male",
    Marital_status: "Married",
    Education_level: "Bachelors",
    Num_dependents: 5,
    Residential_status: "Rented",
    Area_type: "Rural",
    Occupation: "Self-Employed",
    Employment_status: "Self-employed",
    Tenure_years: 13,
    Net_cashflow: -88,
    Avg_monthly_balance: 8113,
    Income_stability: "Low",
    Recurring_payments_count: 8,
    Card_usage_frequency: 27,
    High_value_transactions_count: 5,
    Spend_groceries_pct: 0.274972,
    Spend_travel_pct: 0.512672,
    Spend_utilities_pct: 0.039359,
    Spend_entertainment_pct: 0.146361,
    Spend_other_pct: 0.026636,
    Existing_loans_count: 0,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.282203,
    Existing_term_deposits_count: 1,
    Login_frequency: 74,
    Marketplace_visits: 23,
    Abandoned_journeys: 6,
    Pages_viewed: 109,
    Offer_click_through_rate: 0.002638,
    Salary_increase_amount: -190,
    Large_deposits_count: 0,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 1,
  },
  {
    Client_ID: "C0009",
    Age: 70,
    Gender: "Female",
    Marital_status: "Widowed",
    Education_level: "Bachelors",
    Num_dependents: 1,
    Residential_status: "Mortgaged",
    Area_type: "Urban",
    Occupation: "Retired",
    Employment_status: "Retired",
    Tenure_years: 23,
    Net_cashflow: 341,
    Avg_monthly_balance: 1883,
    Income_stability: "Low",
    Recurring_payments_count: 1,
    Card_usage_frequency: 8,
    High_value_transactions_count: 1,
    Spend_groceries_pct: 0.09076,
    Spend_travel_pct: 0.002799,
    Spend_utilities_pct: 0.420209,
    Spend_entertainment_pct: 0.137667,
    Spend_other_pct: 0.348565,
    Existing_loans_count: 0,
    Existing_credit_cards_count: 1,
    Credit_card_utilization_rate: 0.15923,
    Existing_term_deposits_count: 2,
    Login_frequency: 47,
    Marketplace_visits: 19,
    Abandoned_journeys: 7,
    Pages_viewed: 107,
    Offer_click_through_rate: 0.05393,
    Salary_increase_amount: -514,
    Large_deposits_count: 2,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 2,
  },
  {
    Client_ID: "C0010",
    Age: 19,
    Gender: "Male",
    Marital_status: "Single",
    Education_level: "High School",
    Num_dependents: 4,
    Residential_status: "Mortgaged",
    Area_type: "Urban",
    Occupation: "Student",
    Employment_status: "—",
    Tenure_years: 0,
    Net_cashflow: 166,
    Avg_monthly_balance: 681,
    Income_stability: "Low",
    Recurring_payments_count: 0,
    Card_usage_frequency: 3,
    High_value_transactions_count: 0,
    Spend_groceries_pct: 0.022604,
    Spend_travel_pct: 0.094431,
    Spend_utilities_pct: 0.109873,
    Spend_entertainment_pct: 0.178891,
    Spend_other_pct: 0.5942,
    Existing_loans_count: 0,
    Existing_credit_cards_count: 2,
    Credit_card_utilization_rate: 0.312046,
    Existing_term_deposits_count: 0,
    Login_frequency: 31,
    Marketplace_visits: 21,
    Abandoned_journeys: 4,
    Pages_viewed: 90,
    Offer_click_through_rate: 0.050337,
    Salary_increase_amount: -429,
    Large_deposits_count: 0,
    Travel_indicator_6m: 0,
    Missed_payments_count: 0,
    Fixed_deposits_count: 3,
  },
];

// Generate placeholder data for pages 2-10
const generatePlaceholderCustomers = (pageNum: number) => {
  return Array.from({ length: 10 }, (_, i) => {
    const clientNum = (pageNum - 1) * 10 + i + 1;
    return {
      Client_ID: `C${String(clientNum).padStart(4, "0")}`,
      Age: 25 + (i % 50),
      Gender: ["Male", "Female", "Other"][i % 3],
      Marital_status: ["Single", "Married", "Widowed"][i % 3],
      Education_level: ["High School", "Bachelors", "Masters"][i % 3],
      Num_dependents: i % 6,
      Residential_status: ["Owned", "Rented", "Mortgaged"][i % 3],
      Area_type: ["Urban", "Suburban", "Rural"][i % 3],
      Occupation: ["Teacher", "Engineer", "Retired"][i % 3],
      Employment_status: ["Employed", "Self-employed", "Retired"][i % 3],
      Tenure_years: 5 + (i % 30),
      Net_cashflow: 100 + i * 50,
      Avg_monthly_balance: 2000 + i * 500,
      Income_stability: ["Low", "Medium", "High"][i % 3],
      Recurring_payments_count: i % 10,
      Card_usage_frequency: 5 + (i % 20),
      High_value_transactions_count: i % 5,
      Spend_groceries_pct: 0.2 + (i % 10) * 0.05,
      Spend_travel_pct: 0.1 + (i % 10) * 0.02,
      Spend_utilities_pct: 0.15 + (i % 10) * 0.03,
      Spend_entertainment_pct: 0.1 + (i % 10) * 0.04,
      Spend_other_pct: 0.05 + (i % 10) * 0.03,
      Existing_loans_count: i % 3,
      Existing_credit_cards_count: (i % 3) + 1,
      Credit_card_utilization_rate: 0.1 + (i % 10) * 0.05,
      Existing_term_deposits_count: i % 3,
      Login_frequency: 30 + (i % 50),
      Marketplace_visits: 10 + (i % 30),
      Abandoned_journeys: i % 10,
      Pages_viewed: 50 + (i % 60),
      Offer_click_through_rate: 0.01 + (i % 10) * 0.005,
      Salary_increase_amount: -500 + i * 100,
      Large_deposits_count: i % 3,
      Travel_indicator_6m: i % 2,
      Missed_payments_count: i % 2,
      Fixed_deposits_count: i % 4,
    };
  });
};

interface ClientData {
  Client_ID: string;
  Age: number;
  Gender: string;
  Marital_status: string;
  Education_level: string;
  Num_dependents: number;
  Residential_status: string;
  Area_type: string;
  Occupation: string;
  Employment_status: string;
  Tenure_years: number;
  Net_cashflow: number;
  Avg_monthly_balance: number;
  Income_stability: string;
  Recurring_payments_count: number;
  Card_usage_frequency: number;
  High_value_transactions_count: number;
  Spend_groceries_pct: number;
  Spend_travel_pct: number;
  Spend_utilities_pct: number;
  Spend_entertainment_pct: number;
  Spend_other_pct: number;
  Existing_loans_count: number;
  Existing_credit_cards_count: number;
  Credit_card_utilization_rate: number;
  Existing_term_deposits_count: number;
  Login_frequency: number;
  Marketplace_visits: number;
  Abandoned_journeys: number;
  Pages_viewed: number;
  Offer_click_through_rate: number;
  Salary_increase_amount: number;
  Large_deposits_count: number;
  Travel_indicator_6m: number;
  Missed_payments_count: number;
  Fixed_deposits_count: number;
}

export function Clients() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const getCurrentPageData = () => {
    if (currentPage === 1) {
      return customersPage1;
    }
    return generatePlaceholderCustomers(currentPage);
  };

  const formatValue = (key: string, value: any) => {
    if (value === null || value === undefined || value === "") {
      return "—";
    }

    // Format percentage/rate fields with 6 decimals
    if (
      key.includes("_pct") ||
      key === "Credit_card_utilization_rate" ||
      key === "Offer_click_through_rate"
    ) {
      return Number(value).toFixed(6);
    }

    return value;
  };

  const columns = [
    { key: "Client_ID", label: "Client ID", sticky: true },
    { key: "Age", label: "Age", sticky: true },
    { key: "Gender", label: "Gender", sticky: true },
    { key: "Marital_status", label: "Marital Status" },
    { key: "Education_level", label: "Education Level" },
    { key: "Num_dependents", label: "Num Dependents" },
    { key: "Residential_status", label: "Residential Status" },
    { key: "Area_type", label: "Area Type" },
    { key: "Occupation", label: "Occupation" },
    { key: "Employment_status", label: "Employment Status" },
    { key: "Tenure_years", label: "Tenure Years" },
    { key: "Net_cashflow", label: "Net Cashflow" },
    { key: "Avg_monthly_balance", label: "Avg Monthly Balance" },
    { key: "Income_stability", label: "Income Stability" },
    { key: "Recurring_payments_count", label: "Recurring Payments" },
    { key: "Card_usage_frequency", label: "Card Usage Frequency" },
    { key: "High_value_transactions_count", label: "High Value Transactions" },
    { key: "Spend_groceries_pct", label: "Spend Groceries %" },
    { key: "Spend_travel_pct", label: "Spend Travel %" },
    { key: "Spend_utilities_pct", label: "Spend Utilities %" },
    { key: "Spend_entertainment_pct", label: "Spend Entertainment %" },
    { key: "Spend_other_pct", label: "Spend Other %" },
    { key: "Existing_loans_count", label: "Existing Loans" },
    { key: "Existing_credit_cards_count", label: "Existing Credit Cards" },
    { key: "Credit_card_utilization_rate", label: "CC Utilization Rate" },
    { key: "Existing_term_deposits_count", label: "Existing Term Deposits" },
    { key: "Login_frequency", label: "Login Frequency" },
    { key: "Marketplace_visits", label: "Marketplace Visits" },
    { key: "Abandoned_journeys", label: "Abandoned Journeys" },
    { key: "Pages_viewed", label: "Pages Viewed" },
    { key: "Offer_click_through_rate", label: "Offer CTR" },
    { key: "Salary_increase_amount", label: "Salary Increase" },
    { key: "Large_deposits_count", label: "Large Deposits" },
    { key: "Travel_indicator_6m", label: "Travel Indicator 6M" },
    { key: "Missed_payments_count", label: "Missed Payments" },
    { key: "Fixed_deposits_count", label: "Fixed Deposits" },
  ];

  const currentData = getCurrentPageData();

  return (
    <main className="max-w-[1280px] mx-auto px-10 py-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1
          className="font-bold mb-1"
          style={{
            color: "var(--text-primary)",
            fontSize: "20px",
          }}
        >
          Clients
        </h1>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "12px",
          }}
        >
          Page 1 shows first 10 customers from dataset
        </p>
      </div>

      {/* Table Container */}
      <div
        className="rounded-lg border overflow-hidden"
        style={{
          backgroundColor: "var(--card)",
          borderColor: "var(--border)",
        }}
        id="table_clients"
      >
        {/* Scrollable Table Wrapper */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <table className="w-full" style={{ fontSize: "12px" }}>
              {/* Table Header */}
              <thead>
                <tr
                  style={{
                    backgroundColor: "var(--table-header-bg)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {columns.map((col, idx) => (
                    <th
                      key={col.key}
                      id={
                        col.sticky
                          ? `sticky_col_${col.key.toLowerCase()}`
                          : undefined
                      }
                      className="px-4 py-3 text-left font-semibold whitespace-nowrap"
                      style={{
                        color: "var(--text-primary)",
                        position: col.sticky ? "sticky" : "static",
                        left:
                          col.sticky && idx === 0
                            ? "0px"
                            : col.sticky && idx === 1
                            ? "110px"
                            : col.sticky && idx === 2
                            ? "170px"
                            : "auto",
                        backgroundColor: "var(--table-header-bg)",
                        zIndex: col.sticky ? 20 : 10,
                        borderRight: col.sticky
                          ? "1px solid var(--border)"
                          : "none",
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {currentData.map((client, rowIdx) => (
                  <tr
                    key={client.Client_ID}
                    className="group hover:bg-opacity-80 transition-colors"
                    style={{
                      backgroundColor:
                        rowIdx % 2 === 0
                          ? "var(--table-row-even)"
                          : "var(--table-row-odd)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    {columns.map((col, colIdx) => (
                      <td
                        key={col.key}
                        className="px-4 py-2 whitespace-nowrap"
                        style={{
                          color: "var(--text-primary)",
                          position: col.sticky ? "sticky" : "static",
                          left:
                            col.sticky && colIdx === 0
                              ? "0px"
                              : col.sticky && colIdx === 1
                              ? "110px"
                              : col.sticky && colIdx === 2
                              ? "170px"
                              : "auto",
                          backgroundColor:
                            rowIdx % 2 === 0
                              ? "var(--table-row-even)"
                              : "var(--table-row-odd)",
                          zIndex: col.sticky ? 15 : 1,
                          borderRight: col.sticky
                            ? "1px solid var(--border)"
                            : "none",
                        }}
                      >
                        {formatValue(
                          col.key,
                          client[col.key as keyof ClientData]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div
          className="px-4 py-3 flex items-center justify-between border-t"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {/* Rows per page */}
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: "12px",
            }}
          >
            Rows per page: 10
          </div>

          {/* Page Controls */}
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              id="pagination_prev"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--hover-glow)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    id={`page_${page}_btn`}
                    onClick={() => setCurrentPage(page)}
                    className="w-7 h-7 rounded text-xs font-medium transition-all"
                    style={{
                      color:
                        currentPage === page
                          ? "#FFFFFF"
                          : "var(--text-primary)",
                      backgroundColor:
                        currentPage === page
                          ? "var(--accent)"
                          : "var(--hover-glow)",
                    }}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              id="pagination_next"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                color: "var(--text-primary)",
                backgroundColor: "var(--hover-glow)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
