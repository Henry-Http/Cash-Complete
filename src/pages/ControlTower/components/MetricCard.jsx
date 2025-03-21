import React from "react";

const MetricCard = ({ label, value, subLabel }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4  sm:p-6 flex flex-col items-start h-36 w-full sm:w-48">
      <div className="flex items-center mb-2">
        {subLabel && (
          <span className="mr-1 text-[14px] text-gray-400">{subLabel}</span>
        )}
        <h3 className="text-xs sm:text-[14px] text-gray-500">{label}</h3>
      </div>
      <p className="text-lg sm:text-[22px] font-semibold text-gray-800 mb-3 sm:mb-4">
        ₦{value.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
      </p>
      <button className="bg-[#055DAE] text-white text-xs sm:text-sm py-1 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Review
      </button>
    </div>
  );
};

export default MetricCard;
