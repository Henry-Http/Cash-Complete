// src/components/DashboardStats.jsx
import React, { useState } from "react";
import {
  FaBuilding,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FaHockeyPuck } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import office from "../../../assets/images/office.png";

const DashboardStats = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState("1 month");

  const branchData = {
    tier: "Tier 2",
    name: "Opebi Road",
    address: "32A, New Gate Str.",
    region: "West Africa",
    branchCode: "5534-76",
  };

  const cashWithdrawalData = {
    amount: "₦117,420,000",
    change: "+2.5",
    trend: "Higher than last week",
    crCount: "11,201",
  };

  const cashDepositData = {
    amount: "₦117,420,000",
    change: "-0.05%",
    trend: "Less than last week",
    drCount: "10,201",
  };

  const cashPositionData = {
    amount: "₦620,510,000",
    change: "+2.5",
    trend: "Higher than last week",
  };

  const vaultBalanceData = {
    amount: "₦140,990,000",
  };

  const tellerTillBalanceData = {
    amount: "₦14,040,000",
  };

  return (
    <div className="space-y-4">
      {/* Filter Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-[26px] font-semibold">Control Tower</h2>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap justify-end gap-2 md:gap-0 w-full sm:w-auto">
          <button
            onClick={() => setActiveFilter("24hrs")}
            className={`px-3 py-1 rounded-l-lg sm:border-r border-gray-300 text-sm font-medium flex-1 sm:flex-none ${
              activeFilter === "24hrs"
                ? "text-[#055DAE] bg-[#D5D5D5]"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            24hrs
          </button>
          <button
            onClick={() => setActiveFilter("1 week")}
            className={`px-3 py-1 sm:border-r border-gray-300 text-sm font-medium flex-1 sm:flex-none ${
              activeFilter === "1 week"
                ? "text-[#055DAE] bg-[#D5D5D5]"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            1 week
          </button>
          <button
            onClick={() => setActiveFilter("1 month")}
            className={`px-3 py-1 sm:border-r border-gray-300 text-sm font-medium flex-1 sm:flex-none ${
              activeFilter === "1 month"
                ? "text-[#055DAE] bg-[#D5D5D5]"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            1 month
          </button>
          <button
            onClick={() => setActiveFilter("1 year")}
            className={`px-3 py-1 sm:border-r border-gray-300 text-sm font-medium flex-1 sm:flex-none ${
              activeFilter === "1 year"
                ? "text-[#055DAE] bg-[#D5D5D5]"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            1 year
          </button>
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-3 py-1 rounded-r-lg text-sm font-medium flex-1 sm:flex-none ${
              activeFilter === "All"
                ? "text-[#055DAE] bg-[#D5D5D5]"
                : darkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            } transition-colors duration-200`}
          >
            All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className={`p- rounded-lg shadow-md ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          }`}
        >
          <div className="flex items-center space-x-4 bg-[#DBDFFD]">
            <img src={office} alt="" className="w-[125px] h-[120px]" />
            <div>
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 -ms-6">
                {branchData.tier}
              </span>
              <h3 className="text-lg font-bold text-[24px] mb-2 -ms-6">
                {branchData.name}
              </h3>
            </div>
          </div>
          <div className="-mt-3 space-y-2 text-sm p-4">
            <div className="flex justify-between mt-4 space-y-2">
              <div className="">
                <span className="text-gray-500 dark:text-gray-400 block">
                  Address
                </span>
                <span>{branchData.address}</span>
              </div>
              <div className="f justify-between">
                <span className="text-gray-500 dark:text-gray-400 block">
                  Region
                </span>
                <span>{branchData.region}</span>
              </div>
            </div>

            <div className="">
              <span className="text-gray-500 dark:text-gray-400 block">
                Branch Code
              </span>
              <span>{branchData.branchCode}</span>
            </div>
          </div>
        </div>

        {/* Cash Withdrawal Card */}
        <div>
          <div
            className={`p-4 rounded-lg shadow-md flex ju h-[120px] ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
            }`}
          >
            <div className="">
              <div>
                <p className="text-[#959595] text-[14px] ms-12">
                  Cash Withdrawal
                </p>
              </div>
              <div className="flex items-center space-x-4  ">
                <FaHandHoldingUsd className="text-4xl text-green-500" />
                <div>
                  <h3 className="text-lg font-bold">
                    {cashWithdrawalData.amount}
                  </h3>
                  <div className="flex">
                    <p className="text-[11px] text-green-500">
                      {cashWithdrawalData.change}
                    </p>
                    <p className="text-[11px] ms-1">Higher than last week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-sm float-end ms-5 border-l-1 ps-1 border-gray-300 ">
              <div className="mt-3 ms-3">
                <span className="text-gray-500 dark:text-gray-400 ">
                  Cr Count
                </span>
                <span className="block text-[24px]">
                  {cashWithdrawalData.crCount}
                </span>
              </div>
            </div>
          </div>

          {/* Cash deposit Card */}
          <div
            className={`p-4 rounded-lg mt-6 shadow-md flex ju h-[120px] ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
            }`}
          >
            <div className="">
              <div>
                <p className="text-[#959595] text-[14px] ms-12">Cash Deposit</p>
              </div>
              <div className="flex items-center space-x-4  ">
                <BsBank className="text-4xl text-red-500 mb-3 " />
                <div>
                  <h3 className="text-lg font-bold">
                    {cashWithdrawalData.amount}
                  </h3>
                  <div className="flex">
                    <p className="text-[11px] text-red-500">-0.5%</p>
                    <p className="text-[11px] ms-1">Higher than last week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" text-sm float-end ms-5 border-l-1 ps-1 border-gray-300 ">
              <div className="mt-3 ms-3">
                <span className="text-gray-500 dark:text-gray-400 ">
                  Dr Count
                </span>
                <span className="block text-[24px]">10,201</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cash Position Card */}
        <div
          className={`p-4 rounded-lg shadow-md ${
            darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
          }`}
        >
          <div className="flex items-center space-x-4 p-9 bg-[#E9EEFC] rounded-bl-[50px] rounded-tr-[50px] ">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
              <FaHockeyPuck className="text-[#055DAE] text-3xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Cash Position
              </h3>
              <p className="text-lg font-bold text-[22px]">
                {cashPositionData.amount}
              </p>
              <div className=" items-center space-x-2">
                <div className="w-[180px] h-2 bg-white rounded-full">
                  <div
                    className="h-2 bg-[#098A16] rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <div className="flex items-center space-x-1">
                  <FaCaretDown className="text-[#098A16]" />
                  <span className="text-sm text-[#098A16]">
                    {cashPositionData.change} {cashPositionData.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-7">
            <div className="bg-[#055DAE] rounded-lg text-white px-4 py-2">
              <p className="text-[12px]">Vault Balance</p>
              <p>{vaultBalanceData.amount}</p>
            </div>
            <div className="border px-4 py-2 border-gray-300 rounded-lg">
              <p className="text-[12px]">Teller Till balance</p>
              <p>{tellerTillBalanceData.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;