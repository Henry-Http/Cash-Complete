import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaEye, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CashRequestTable = ({ darkMode }) => {
  const navigate = useNavigate();

  const requests = [
    {
      id: 1,
      originator: "Babatola Oluwatoyin",
      code: "TI-338-3737-2882",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "Nigerian", name: "Naira (NGN)" },
      status: "FULFILLED",
      orderNumber: "#CC037853349B8",
      deliveryDate: "08 Mar, 2022",
      branch: "Ajose Adeogun",
      orderDate: "06 Mar, 2022",
      note: "We need to top up our cash reserves by Friday if we will have enough cash to complete transactions and for the ATM on Monday. Please approve ASAP.",
      denominations: [
        { denomination: "N100", quantity: 20000, amount: "N2,000,000" },
        { denomination: "N200", quantity: 20000, amount: "N4,000,000" },
        { denomination: "N500", quantity: 10000, amount: "N5,000,000" },
        { denomination: "N1,000", quantity: 20000, amount: "N20,000,000" },
      ],
      totalAmount: "N31,000,000",
    },
    {
      id: 2,
      originator: "Cash Officer",
      code: "",
      fromBranch: "Adeola Odeku Br.",
      toBranch: "Oke Arin Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "European", name: "Euro (EUR)" },
      status: "UNFULFILLED",
      date: "Wed, Apr 19 2022",
      orderNumber: "#CC037853349B9",
      deliveryDate: "10 Mar, 2022",
      branch: "Victoria Island",
      orderDate: "05 Mar, 2022",
      note: "Urgent request for weekend operations.",
      denominations: [
        { denomination: "N100", quantity: 10000, amount: "N1,000,000" },
        { denomination: "N200", quantity: 10000, amount: "N2,000,000" },
      ],
      totalAmount: "N3,000,000",
    },
    {
      id: 3,
      originator: "Cash Officer",
      code: "",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "British", name: "Pounds (GBP)" },
      status: "FULFILLED",
      date: "Wed, Apr 19 2023",
      orderNumber: "#CC037853349C0",
      deliveryDate: "12 Mar, 2022",
      branch: "Ajose Adeogun",
      orderDate: "07 Mar, 2022",
      note: "Additional funds needed for holiday season.",
      denominations: [
        { denomination: "N100", quantity: 15000, amount: "N1,500,000" },
        { denomination: "N200", quantity: 15000, amount: "N3,000,000" },
        { denomination: "N500", quantity: 8000, amount: "N4,000,000" },
      ],
      totalAmount: "N8,500,000",
    },
    {
      id: 4,
      originator: "Cash Officer",
      code: "TI-338-3737-2882",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "European", name: "Euro (EUR)" },
      status: "FULFILLED",
      orderNumber: "#CC037853349C1",
      deliveryDate: "15 Mar, 2022",
      branch: "Ajose Adeogun",
      orderDate: "10 Mar, 2022",
      note: "Request for branch operations.",
      denominations: [
        { denomination: "N100", quantity: 12000, amount: "N1,200,000" },
        { denomination: "N200", quantity: 12000, amount: "N2,400,000" },
      ],
      totalAmount: "N3,600,000",
    },
    {
      id: 5,
      originator: "Cash Officer",
      code: "TI-338-3737-2882",
      fromBranch: "Adeola Odeku Br.",
      toBranch: "Oke Arin Br.",
      requestCode: "CR-36940",
      amount: "₦38,995,000",
      currency: { country: "Canadian", name: "Dollars (CAD)" },
      status: "PENDING",
      orderNumber: "#CC037853349C2",
      deliveryDate: "18 Mar, 2022",
      branch: "Victoria Island",
      orderDate: "13 Mar, 2022",
      note: "Pending approval for cash transfer.",
      denominations: [
        { denomination: "N100", quantity: 18000, amount: "N1,800,000" },
        { denomination: "N200", quantity: 18000, amount: "N3,600,000" },
        { denomination: "N500", quantity: 9000, amount: "N4,500,000" },
      ],
      totalAmount: "N9,900,000",
    },
    {
      id: 6,
      originator: "Cash Officer",
      code: "TI-338-3737-2882",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "British", name: "Pounds (GBP)" },
      status: "UNFULFILLED",
      orderNumber: "#CC037853349C3",
      deliveryDate: "20 Mar, 2022",
      branch: "Ajose Adeogun",
      orderDate: "15 Mar, 2022",
      note: "Awaiting funds for branch operations.",
      denominations: [
        { denomination: "N100", quantity: 11000, amount: "N1,100,000" },
        { denomination: "N200", quantity: 11000, amount: "N2,200,000" },
      ],
      totalAmount: "N3,300,000",
    },
    {
      id: 7,
      originator: "Cash Officer",
      code: "TI-338-3737-2882",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36941",
      amount: "₦38,995,000",
      currency: { country: "Nigerian", name: "Naira (NGN)" },
      status: "FULFILLED",
      orderNumber: "#CC037853349C4",
      deliveryDate: "22 Mar, 2022",
      branch: "Ajose Adeogun",
      orderDate: "17 Mar, 2022",
      note: "Funds delivered successfully.",
      denominations: [
        { denomination: "N100", quantity: 20000, amount: "N2,000,000" },
        { denomination: "N200", quantity: 20000, amount: "N4,000,000" },
        { denomination: "N500", quantity: 10000, amount: "N5,000,000" },
      ],
      totalAmount: "N11,000,000",
    },
    {
      id: 8,
      originator: "Cash Officer",
      code: "TI-338-3737-2882",
      fromBranch: "Oke Arin Br.",
      toBranch: "Adeola Odeku Br.",
      requestCode: "CR-36980",
      amount: "₦38,995,000",
      currency: { country: "Canadian", name: "Dollars (CAD)" },
      status: "FULFILLED",
      orderNumber: "#CC037853349C5",
      deliveryDate: "25 Mar, 2022",
      branch: "Victoria Island",
      orderDate: "20 Mar, 2022",
      note: "Final request for the month.",
      denominations: [
        { denomination: "N100", quantity: 13000, amount: "N1,300,000" },
        { denomination: "N200", quantity: 13000, amount: "N2,600,000" },
      ],
      totalAmount: "N3,900,000",
    },
  ];

  const [startDate, setStartDate] = useState(new Date("2022-08-06"));
  const [endDate, setEndDate] = useState(new Date("2022-08-13"));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const formatDate = (date) =>
    date
      ? date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : "Select Date";

  const formattedDateRange = `${formatDate(startDate)} - ${formatDate(endDate)}`;

  const getFirstLetter = (name) => {
    const firstName = name.split(" ")[0];
    return firstName.charAt(0).toUpperCase();
  };

  const handleRowClick = (id) => {
    navigate(`/cash-requests/${id}`);
  };

  return (
    <div
      className={`p-6 rounded-lg shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search for Amount, Code or Branch name"
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

        <div className="flex space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <div
              className={`w-full p-2 rounded-lg border cursor-pointer ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-800 border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              onClick={() => setShowDatePicker(!showDatePicker)}
            >
              <span>{formattedDateRange}</span>
              <span className="absolute inset-y-0 right-2 flex items-center text-gray-500 dark:text-gray-400">
                <FaCalendarAlt />
              </span>
            </div>
            {showDatePicker && (
              <div className="absolute z-10 mt-2">
                <DatePicker
                  selected={startDate}
                  onChange={(dates) => {
                    const [start, end] = dates;
                    setStartDate(start);
                    setEndDate(end);
                    if (end) {
                      setShowDatePicker(false); 
                    }
                  }}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                  dateFormat="MMM d, yyyy"
                  className="border rounded-lg shadow-md"
                />
              </div>
            )}
          </div>

          <div className="relative w-full sm:w-40">
            <select
              className={`w-full p-2 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-800 border-gray-300"
              } appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option>Type</option>
              <option>Fulfilled</option>
              <option>Unfulfilled</option>
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
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr
              className={`text-xs uppercase ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              <th className="py-2 px-4">Originator</th>
              <th className="py-2 px-4">From Branch</th>
              <th className="py-2 px-4">To Branch</th>
              <th className="py-2 px-4">Code</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Currency</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                onClick={() => handleRowClick(request.id)}
                className={`border-t mb-2 cursor-pointer ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } hover:bg-gray-200 dark:hover:bg-gray-300 transition-colors duration-200`}
              >
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center font-bold">
                      {getFirstLetter(request.originator)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{request.originator}</span>
                      {request.code && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {request.code}
                        </span>
                      )}
                      {request.date && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {request.date}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">{request.fromBranch}</td>
                <td className="py-3 px-4">{request.toBranch}</td>
                <td className="py-3 px-4">{request.requestCode}</td>
                <td className="py-3 px-4">{request.amount}</td>
                <td className="py-3 px-4">
                  <div className="flex flex-col">
                    <span className="font-medium">{request.currency.country}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {request.currency.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      request.status === "FULFILLED"
                        ? "bg-green-100 text-green-800"
                        : request.status === "UNFULFILLED"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleRowClick(request.id);
                    }}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          className={`flex items-center px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-gray-700 text-gray-300 border-gray-600"
              : "bg-white text-gray-600 border-gray-300"
          } hover:bg-gray-200 transition-colors duration-200`}
          disabled
        >
          <FaChevronLeft className="mr-2" />
          Previous
        </button>

        <div className="flex space-x-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-lg ${
                page === 1
                  ? "bg-blue-100 text-blue-600"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-600 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          className={`flex items-center px-4 py-2 rounded-lg border ${
            darkMode
              ? "bg-gray-700 text-gray-300 border-gray-600"
              : "bg-white text-gray-600 border-gray-300"
          } hover:bg-gray-200 transition-colors duration-200`}
        >
          Next
          <FaChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CashRequestTable;