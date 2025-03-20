import React from "react";
import {
  FaBars,
  FaBell,
  FaComment,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import logo from "../../../assets/images/cash-logo.png";

const Header = ({ toggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <header
      className={`w-full h-[70px] flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md z-30`}
    >
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="md:hidden">
          <FaBars className="text-gray-700 dark:text-gray-300 text-xl" />
        </button>
        <img src={logo} alt="" className="w-[65px] h-[50px] md:w-[95px] md:h-[55px]" />

        <div className="flex flex-col">
          <span className="text-gray-900 dark:text-gray-200 font-semibold text-sm">
            Branch
          </span>
          <select
            className={`bg- rounded-lg px-2 py-1 text-sm font-light italic ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white"
                : "bg-gray-100 border-gray-300 text-gray-900"
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option className="">Opebi Branch</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="md:flex items-center space-x-4 hidden">
          <button className="relative">
            <FaComment className="text-gray-700 dark:text-gray-300 text-2xl" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          <button className="relative">
            <FaBell className="text-gray-700 dark:text-gray-300 text-2xl" />
            <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>

        <div className="flex items-center space-x-[-15px] md:space-x-2">
          <div className="h-8 w-8 bg-[#F5F5F5] text-white rounded-lg flex items-center justify-center text-sm">
            <span className="text-[#0F3677]"> OE</span>
          </div>
          <div className="md:flex flex-col hidden">
            <span className="text-gray-900 dark:text-gray-200 text-sm font-semibold">
              Olamide Emiola
            </span>
            <span className="text-gray-700 dark:text-gray-400 text-xs">
              Cash Officer
            </span>
          </div>
        </div>
        <div>
          <button onClick={toggleDarkMode} className="p-2">
            {darkMode ? (
              <FaSun className="text-gray-200 text-xl" />
            ) : (
              <FaMoon className="text-gray-700 text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
