import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FaInfoCircle } from "react-icons/fa";

ChartJS.register(ArcElement, Tooltip, Legend);

const AtmStatus = ({ darkMode }) => {
  const atmStatusData = {
    labels: ["In service", "Out of service", "Switch Dis", "Unknown"],
    datasets: [
      {
        data: [20, 20, 20, 20],
        backgroundColor: ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0"],
        borderWidth: 0,
      },
    ],
  };

  const cashStatusData = {
    labels: ["Cash low", "Cash out", "Available", "Unknown"],
    datasets: [
      {
        data: [20, 20, 20, 20],
        backgroundColor: ["#FF9800", "#2196F3", "#4CAF50", "#9C27B0"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const gaugeData = {
    labels: ["Safe", "Caution", "Danger", "Value"],
    datasets: [
      {
        data: [20, 60, 20, 0],
        backgroundColor: [ "#FF9800","#4CAF50", "#F44336", "transparent"],
        borderWidth: 0,
        circumference: 270,
        rotation: 225,
      },
      {
        data: [64, 36],
        backgroundColor: [ "transparent"],
        borderWidth: 0,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const gaugeOptions = {
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    needle: {
      value: 64,
    },
  };

  return (
    <>
      <p className="text-[20px] font-semibold mb-3">ATM Health Monitor</p>
      <div className="flex flex-col lg:flex-row gap-6">
        <div
          className={`flex-1 lg:flex-[7] p-6 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Current ATM Balance
          </h2>
          <p className="text-3xl sm:text-4xl font-bold mb-4">₦420,000,000</p>

          <div className="md:flex grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 w-[110px]">
                Today’s Withdrawal
              </p>
              <p className="text-[16px] font-semibold">₦6,110,000</p>
            </div>
            <div>
              <p className="text-[12px] text-black dark:text-gray-400 w-[120px]">
                Daily Withdrawal Limit
              </p>
              <p className="text-[16px] font-semibold">₦36,110,000</p>
            </div>
            <div>
              <p className="text-[12px] text-black dark:text-gray-400 w-[100px]">
                Today’s Spendings
              </p>
              <p className="text-[16px] font-semibold">₦3,110,000</p>
            </div>
            <div>
              <p className="text-[12px] text-black dark:text-gray-400 w-[110px]">
                Daily Spending Limit
              </p>
              <p className="text-[16px] font-semibold">₦36,110,000</p>
            </div>
            <div>
              <button className="w-[90px] bg-[#055DAE] text-gray-300 text-sm py-2 rounded-lg hover:bg-blue-700 transition-colors mb-4 italic font-extralight md:ms-12">
                View Detail
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border px-2 border-gray-300 rounded-xl p-3">
              <h3 className="text-[12px] font-semibold mb-2">ATM STATUS</h3>
              <div className="flex">
                <div className="relative flex justify-center w-[150px] sm:w-[113px] mx-auto">
                  <Doughnut data={atmStatusData} options={chartOptions} />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-[12px]">
                  <div className=" items-center">
                    <p>In service</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Out of service</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Switch Dis</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Unknown</p> <p className="font-semibold">20</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border px-2 border-gray-300 rounded-xl p-5">
              <h3 className="text-[12px] font-semibold mb-2">CASH STATUS</h3>
              <div className="flex">
                <div className="relative flex justify-center w-[150px] sm:w-[113px] mx-auto">
                  <Doughnut data={cashStatusData} options={chartOptions} />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4 text-[12px]">
                  <div className=" items-center">
                    <p>Cash low</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Cash out</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Available</p> <p className="font-semibold">20</p>
                  </div>
                  <div className=" items-center">
                    <p>Unknown</p> <p className="font-semibold">20</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <p className="text-[20px] font-semibold md:-mt-10 m-3">Cash Health</p>
          <div
            className={`flex-1 lg:flex-[3] p-6 rounded-lg shadow-md  ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-lg sm:text-[32px] font-semibold mb-4 text-center">
              20% Below Limit
            </h2>
            <div className="relative flex justify-center mb-4 w-[150px] sm:w-[165px] mx-auto">
              <Doughnut data={gaugeData} options={gaugeOptions} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl font-bold mt-12 text-[#2ECF3E99]">64%</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mb-4 text-sm">
              <div className="flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                Safe zone
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                Caution
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                Danger
              </div>
            </div>

            <div
              className={`flex items-center p-3 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <FaInfoCircle className="mr-2 text-blue-500" />
              <p className="text-sm">
                Request a cash supply by 3:00pm or you may not have cash on
                Monday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtmStatus;
