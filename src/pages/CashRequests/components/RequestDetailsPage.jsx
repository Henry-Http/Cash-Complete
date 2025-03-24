import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/cash-logo.png";

const RequestDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [activeTab, setActiveTab] = useState("Details");

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
      activities: [
        {
          date: "March 7",
          user: "Me",
          role: "",
          action: "Made a cash request for N26,653,457",
          timestamp: "7 Mar 2022 5:21 PM",
          type: "me",
        },
        {
          date: "March 7",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Received your cash order request",
          timestamp: "7 Mar 2022 5:24 PM",
          type: "bello",
        },
        {
          date: "March 7",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "7 Mar 2022 5:28 PM",
          type: "bello",
        },
        {
          date: "March 8",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "8 Mar 2022 5:28 PM",
          type: "bello",
        },
        {
          date: "March 8",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Received your REQUEST",
          timestamp: "8 Mar 2022 5:28 PM",
          type: "damina",
        },
        {
          date: "March 8",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Rejected your cash request",
          timestamp: "8 Mar 2022 5:32 PM",
          type: "bello",
          note: "Exceed Limit: We actually don’t need that much cash as the holidays are approaching and more people are traveling. Please review the request down by 35%",
          noteType: "reject",
        },
        {
          date: "March 9",
          user: "Me",
          role: "",
          action: "Modified cash request",
          timestamp: "9 Mar 2022 7:43 AM",
          type: "me",
        },
        {
          date: "March 9",
          user: "Me",
          role: "",
          action: "Made a cash request for N26,653,457",
          timestamp: "9 Mar 2022 7:49 AM",
          type: "me",
        },
        {
          date: "March 9",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "9 Mar 2022 8:00 AM",
          type: "bello",
        },
        {
          date: "March 9",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Received your REQUEST",
          timestamp: "9 Mar 2022 11:45 AM",
          type: "damina",
        },
        {
          date: "March 9",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Cash approved and routed to Adeola Odeku branch",
          timestamp: "9 Mar 2022 8:12 AM",
          type: "damina",
        },
        {
          date: "March 10",
          user: "",
          role: "",
          action: "Your cash request order has been completed",
          timestamp: "10 Mar 2022 9:25 AM",
          type: "completed",
        },
      ],
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
      activities: [
        {
          date: "March 5",
          user: "Me",
          role: "",
          action: "Made a cash request for N3,000,000",
          timestamp: "5 Mar 2022 3:15 PM",
          type: "me",
        },
        {
          date: "March 5",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Received your cash order request",
          timestamp: "5 Mar 2022 3:20 PM",
          type: "bello",
        },
        {
          date: "March 6",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Rejected your cash request",
          timestamp: "6 Mar 2022 10:30 AM",
          type: "bello",
          note: "Insufficient funds available for this request.",
          noteType: "reject",
        },
      ],
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
      activities: [
        {
          date: "March 7",
          user: "Me",
          role: "",
          action: "Made a cash request for N8,500,000",
          timestamp: "7 Mar 2022 9:00 AM",
          type: "me",
        },
        {
          date: "March 7",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "7 Mar 2022 9:30 AM",
          type: "bello",
        },
        {
          date: "March 8",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Cash approved and routed to Ajose Adeogun branch",
          timestamp: "8 Mar 2022 2:00 PM",
          type: "damina",
        },
        {
          date: "March 9",
          user: "",
          role: "",
          action: "Your cash request order has been completed",
          timestamp: "9 Mar 2022 10:00 AM",
          type: "completed",
        },
      ],
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
      activities: [
        {
          date: "March 10",
          user: "Me",
          role: "",
          action: "Made a cash request for N3,600,000",
          timestamp: "10 Mar 2022 8:00 AM",
          type: "me",
        },
        {
          date: "March 10",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "10 Mar 2022 8:30 AM",
          type: "bello",
        },
        {
          date: "March 11",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Cash approved and routed to Ajose Adeogun branch",
          timestamp: "11 Mar 2022 1:00 PM",
          type: "damina",
        },
        {
          date: "March 12",
          user: "",
          role: "",
          action: "Your cash request order has been completed",
          timestamp: "12 Mar 2022 9:00 AM",
          type: "completed",
        },
      ],
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
      activities: [
        {
          date: "March 13",
          user: "Me",
          role: "",
          action: "Made a cash request for N9,900,000",
          timestamp: "13 Mar 2022 10:00 AM",
          type: "me",
        },
        {
          date: "March 13",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Received your cash order request",
          timestamp: "13 Mar 2022 10:15 AM",
          type: "bello",
        },
      ],
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
      activities: [
        {
          date: "March 15",
          user: "Me",
          role: "",
          action: "Made a cash request for N3,300,000",
          timestamp: "15 Mar 2022 11:00 AM",
          type: "me",
        },
        {
          date: "March 15",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Received your cash order request",
          timestamp: "15 Mar 2022 11:10 AM",
          type: "bello",
        },
        {
          date: "March 16",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Rejected your cash request",
          timestamp: "16 Mar 2022 9:00 AM",
          type: "bello",
          note: "Insufficient funds for this request.",
          noteType: "reject",
        },
      ],
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
      activities: [
        {
          date: "March 17",
          user: "Me",
          role: "",
          action: "Made a cash request for N11,000,000",
          timestamp: "17 Mar 2022 8:00 AM",
          type: "me",
        },
        {
          date: "March 17",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "17 Mar 2022 8:30 AM",
          type: "bello",
        },
        {
          date: "March 18",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Cash approved and routed to Ajose Adeogun branch",
          timestamp: "18 Mar 2022 3:00 PM",
          type: "damina",
        },
        {
          date: "March 19",
          user: "",
          role: "",
          action: "Your cash request order has been completed",
          timestamp: "19 Mar 2022 10:00 AM",
          type: "completed",
        },
      ],
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
      activities: [
        {
          date: "March 20",
          user: "Me",
          role: "",
          action: "Made a cash request for N3,900,000",
          timestamp: "20 Mar 2022 9:00 AM",
          type: "me",
        },
        {
          date: "March 20",
          user: "Bello Atinuke",
          role: "OPS HEAD",
          action: "Approved your cash request",
          timestamp: "20 Mar 2022 9:30 AM",
          type: "bello",
        },
        {
          date: "March 21",
          user: "Damina Olayinka",
          role: "CMU HEAD",
          action: "Cash approved and routed to Victoria Island branch",
          timestamp: "21 Mar 2022 2:00 PM",
          type: "damina",
        },
        {
          date: "March 22",
          user: "",
          role: "",
          action: "Your cash request order has been completed",
          timestamp: "22 Mar 2022 11:00 AM",
          type: "completed",
        },
      ],
    },
  ];

  useEffect(() => {
    const selectedRequest = requests.find((req) => req.id === parseInt(id));
    if (selectedRequest) {
      setRequest(selectedRequest);
    } else {
      navigate("/cash-requests");
    }
  }, [id, navigate]);

  if (!request) {
    return <div>Loading...</div>;
  }

  const handleCancelRequest = () => {
    console.log(`Cancelling request ${request.orderNumber}`);
    navigate("/cash-requests");
  };

  const handleConfirmReceipt = () => {
    console.log(`Confirmed receipt for request ${request.orderNumber}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Cash Complete Logo" className="h-8 mr-2" />
        </div>
        <button
          onClick={() => navigate("/cash-requests")}
          className="text-gray-600 hover:text-gray-800 text-lg sm:text-xl"
        >
          ✕ Exit
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("Details")}
              className={`pb-2 text-sm sm:text-base ${
                activeTab === "Details"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab("Activities")}
              className={`pb-2 text-sm sm:text-base ${
                activeTab === "Activities"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              Activities
            </button>
          </div>

          {/* Main Content and Sidebar */}
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 lg:mb-0">
              {activeTab === "Details" ? (
                <>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    Cash order to {request.branch}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 border-b-2 py-3 border-gray-200">
                    Order by: {request.originator} • Delivery: {request.deliveryDate}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 border-b-2 py-3 border-gray-200">
                    Order Number: {request.orderNumber}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 border-b-2 py-3 border-gray-200">
                    Order Status:{" "}
                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {request.status}
                    </span>
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-xs sm:text-sm text-gray-600 italic mb-1.5 font-extralight">
                      NOTE BY OLAMIDE ENIOLA
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">{request.note}</p>
                  </div>

                  <div className="bg-[#F5F5F5] p-4 sm:p-6">
                    <h3 className="text-xs sm:text-sm text-gray-600 mb-2 italic font-extralight">
                      Your Order
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm text-gray-600 mb-4">
                        <thead>
                          <tr className="border-b border-gray-200 italic">
                            <th className="text-left py-2 font-extralight">DENOMINATION</th>
                            <th className="text-left py-2 px-4 sm:px-10 font-extralight">QTY</th>
                            <th className="text-left py-2 font-extralight">AMOUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          {request.denominations.map((denom, index) => (
                            <tr
                              key={index}
                              className="border-b border-gray-200 bg-[#FFFFFF]"
                            >
                              <td className="py-2">{denom.denomination}</td>
                              <td className="py-2 px-4 sm:px-10">
                                {denom.quantity.toLocaleString()}
                              </td>
                              <td className="py-2">{denom.amount}</td>
                            </tr>
                          ))}
                          <tr className="font-extralight italic">
                            <td className="py-2">TOTAL AMOUNT REQUESTED</td>
                            <td></td>
                            <td className="py-2">{request.totalAmount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <button
                    onClick={handleCancelRequest}
                    className="px-4 py-2 mt-4 w-full sm:w-auto float-right bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    Cancel Request
                  </button>
                </>
              ) : (
                <>
                  <div className="relative">
                    {request.activities.map((activity, index) => (
                      <div key={index} className="mb-6 relative">
                        {index === 0 ||
                        activity.date !== request.activities[index - 1].date ? (
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">
                            {activity.date}
                          </p>
                        ) : null}

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-3 sm:mr-4">
                            {activity.type === "me" ? (
                              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-orange-500 text-white text-xs font-medium">
                                O
                              </span>
                            ) : activity.type === "bello" ? (
                              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 text-white text-xs font-medium">
                                B
                              </span>
                            ) : activity.type === "damina" ? (
                              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 text-white text-xs font-medium">
                                D
                              </span>
                            ) : activity.type === "completed" ? (
                              <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 text-white text-xs font-medium">
                                ✓
                              </span>
                            ) : null}
                          </div>

                          <div className="flex-1">
                            <p className="text-xs sm:text-sm text-gray-800">
                              {activity.user}{" "}
                              {activity.role && (
                                <span className="text-gray-500">{activity.role}</span>
                              )}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600">
                              {activity.action}
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.timestamp}
                            </p>

                            {activity.note && (
                              <div
                                className={`mt-2 p-3 rounded-lg ${
                                  activity.noteType === "reject"
                                    ? "bg-red-50 text-red-600"
                                    : "bg-gray-50 text-gray-600"
                                }`}
                              >
                                <p className="text-xs sm:text-sm font-medium">
                                  {activity.noteType === "reject" ? "✕ " : ""}
                                  {activity.note}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {index < request.activities.length - 1 && (
                          <div className="absolute left-2.5 sm:left-3 top-8 h-[calc(100%-2rem)] w-0.5 bg-gray-200"></div>
                        )}
                      </div>
                    ))}
                  </div>

                  {request.status !== "FULFILLED" && (
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={handleConfirmReceipt}
                        className="px-4 py-2 w-full sm:w-auto bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm"
                      >
                        Confirm Receipt
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 bg-white h-fit rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
                {request.totalAmount}
              </h3>
              <div className="flex justify-between border-b py-2 border-gray-200">
                <p className="font-extralight italic text-xs sm:text-sm">Order Date:</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {request.orderDate}
                </p>
              </div>
              <div className="flex justify-between border-b py-2 border-gray-200">
                <p className="font-extralight italic text-xs sm:text-sm">Delivery:</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {request.deliveryDate}
                </p>
              </div>
              <div className="flex justify-between border-b py-2 border-gray-200">
                <p className="font-extralight italic text-xs sm:text-sm">Branch:</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{request.branch}</p>
              </div>
              <div className="flex justify-between border-b py-2 border-gray-200">
                <p className="font-extralight italic text-xs sm:text-sm">By:</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {request.originator}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="font-extralight italic py-3 text-xs sm:text-sm">Status</p>
                <p className="text-xs sm:text-sm text-gray-600 py-3">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs float-right">
                    {request.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RequestDetailsPage;