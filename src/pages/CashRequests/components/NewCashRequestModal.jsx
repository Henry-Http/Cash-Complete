import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

const NewCashRequestModal = ({ isOpen, onClose, darkMode }) => {
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [approver, setApprover] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      currency,
      amount,
      expectedDelivery: { date, time },
      approver,
      note,
    });
    setCurrency("");
    setAmount("");
    setDate(null);
    setTime(null);
    setApprover("");
    setNote("");
    onClose();
  };

  const handleCancel = () => {
    setCurrency("");
    setAmount("");
    setDate(null);
    setTime(null);
    setApprover("");
    setNote("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black opacity-95">
      <div
        className="absolute inset-0 bg-transparent backdrop-blur-sm"
        onClick={handleCancel}
      ></div>

      
      <div
        className="relative w-full max-w-sm p-5 rounded-lg shadow-lg bg-white text-gray-800 transition-all duration-300 z-50"
        style={{ opacity: 1 }}
      >
        <button
          onClick={handleCancel}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-[26px] font-semibold mb-3 text-[#052B4E]">New Cash Request</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full p-2 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            >
              <option value="" disabled>
                Select a currency
              </option>
              <option value="NGN">Naira (NGN)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="GBP">Pounds (GBP)</option>
              <option value="CAD">Dollars (CAD)</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Amount
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                ₦
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="How much are you requesting?"
                className="w-full p-2 pl-8 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Expected delivery date
            </label>
            <div className="flex space-x-2">
              <div className="relative w-1/2">
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  placeholderText="Date"
                  dateFormat="MMM d, yyyy"
                  className="w-full p-2 pl-10 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaCalendarAlt size={14} />
                </span>
              </div>

              <div className="relative w-1/2">
                <DatePicker
                  selected={time}
                  onChange={(time) => setTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Time"
                  className="w-full p-2 pl-10 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                  <FaClock size={14} />
                </span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Approver
            </label>
            <select
              value={approver}
              onChange={(e) => setApprover(e.target.value)}
              className="w-full p-2 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            >
              <option value="" disabled>
                Who will approve this?
              </option>
              <option value="Babatola Oluwatoyin">Babatola Oluwatoyin</option>
              <option value="Cash Officer">Cash Officer</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any other information about your request?"
              className="w-full p-2 rounded-lg border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              rows="2"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleCancel}
              className="px-3 py-1 rounded-lg border bg-white text-gray-600 border-gray-300 hover:bg-gray-200 transition-colors duration-200 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCashRequestModal;