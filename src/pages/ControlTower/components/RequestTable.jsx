import React from "react";
import { FaCalendarAlt, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RequestTable = ({ darkMode }) => {
  const requests = [
    {
      status: "Approved",
      packageId: "PKG-2290-2251-110",
      requestType: "Cash Evacuation",
      bank: "GTBANK",
      branch: "Anthny Str. Br.",
    },
    {
      status: "Approved",
      packageId: "PKG-2290-2251-110",
      requestType: "Cash Supply",
      bank: "GTBANK",
      branch: "Anthny Str. Br.",
    },
    {
      status: "Pending",
      packageId: "PKG-2290-2251-110",
      requestType: "Cash Supply",
      bank: "GTBANK",
      branch: "Anthny Str. Br.",
    },
    {
      status: "Approved",
      packageId: "PKG-2290-2251-110",
      requestType: "Cash Evacuation",
      bank: "GTBANK",
      branch: "Anthny Str. Br.",
    },
  ];

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <div className="w-full sm:w-40">
            <label
              className={`block text-sm mb-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Request
            </label>
            <div className="relative">
              <select
                className={`w-full p-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-300"
                } appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option>ALL</option>
                <option>Approved</option>
                <option>Pending</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="w-full sm:w-40">
            <label
              className={`block text-sm mb-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Date
            </label>
            <div className="relative">
              <select
                className={`w-full p-2 rounded-lg border ${
                  darkMode
                    ? "bg-gray-700 text-white border-gray-600"
                    : "bg-white text-gray-800 border-gray-300"
                } appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
              >
                <option>All time</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
              <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
                <FaCalendarAlt />
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Find Package ID"
            className={`w-full p-2 pl-8 rounded-lg border ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-800 border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500 dark:text-gray-400">
            <FaSearch />
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr
              className={`text-xs uppercase ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Request ID</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Destination</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={index}
                className={`border-t mb-2 ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === "Approved"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {request.status === "Approved" ? (
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                    {request.status}
                  </span>
                </td>
                <td className="py-3 px-4">{request.packageId}</td>
                <td className="py-3 px-4">{request.requestType}</td>
                <td className="py-3 px-4">
                  <div className="flex flex-col">
                    <span className="font-medium">{request.bank}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {request.branch}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-start mt-4">
        <button
          className={`p-2 rounded-full ${
            darkMode
              ? "text-gray-400 hover:bg-gray-700"
              : "text-gray-500 hover:bg-gray-200"
          }`}
          disabled
        >
          <FaChevronLeft />
        </button>
        <button
          className={`p-2 rounded-full ${
            darkMode
              ? "text-blue-400 hover:bg-gray-700"
              : "text-blue-600 hover:bg-gray-200"
          } ml-2`}
        >
          <FaChevronRight />
        </button>
        <div><p className="text-[14px] mt-1">1 of 12</p></div>
      </div>
    </div>
  );
};

export default RequestTable;