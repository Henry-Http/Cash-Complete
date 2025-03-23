import React from "react";
import { FaFilter } from "react-icons/fa";

const CashRequestHeader = ({ darkMode, onNewRequest }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1
        className={`text-2xl font-bold ${
          darkMode ? "text-white" : "text-[#0F3677]"
        }`}
      >
        Cash Request
      </h1>

      <div className="flex space-x-3">
        <button
          className={`flex items-center px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-gray-700 text-gray-300 border-gray-600"
              : "bg-white text-gray-600 border-gray-300"
          } hover:bg-gray-200 transition-colors duration-200`}
        >
          <FaFilter className="mr-2" />
          Filter
        </button>

        <button
          onClick={onNewRequest} 
          className="px-4 py-2 bg-[#0F3677] text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
        >
          New Request
        </button>
      </div>
    </div>
  );
};

export default CashRequestHeader;