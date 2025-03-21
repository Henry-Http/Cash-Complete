import React from "react";
import MetricCard from "./MetricCard";

const FinancialMetrics = ({ darkMode }) => {
  const metrics = [
    { label: "Cash Request", value: 60310000, subLabel: "2" },
    { label: "Cash Evacuation", value: 10000000, subLabel: "1" },
    { label: "Faulty Notes", value: 20000000 },
    { label: "Overage", value: 0 },
    { label: "Shortage", value: 25000000 },
  ];

  return (
    <div>
      <h2
        className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Operation Action
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            label={metric.label}
            value={metric.value}
            subLabel={metric.subLabel}
          />
        ))}
      </div>
    </div>
  );
};

export default FinancialMetrics;
