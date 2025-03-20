// src/components/Sidebar.jsx
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaShieldAlt,
  FaChartPie,
  FaChartLine,
  FaLock,
  FaUsers,
  FaClipboardList,
  FaCog,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, toggleSidebar, darkMode }) => {
  const [operationsOpen, setOperationsOpen] = useState(false);

  const toggleOperations = () => {
    setOperationsOpen(!operationsOpen);
  };

  const menuItems = [
    { name: "Control Tower", icon: <FaTachometerAlt />, active: true },
    {
      name: "Operations",
      icon: <FaTasks />,
      isDropdown: true,
      subItems: [
        "Cash Request",
        "Mutilated Notes",
        "Cash Evacuation",
        "Overages / Shortages",
      ],
    },
    { name: "Insurance Manager", icon: <FaShieldAlt /> },
    { name: "Report & Analysis", icon: <FaChartPie /> },
    { name: "Cash Forecast", icon: <FaChartLine /> },
    { name: "E-Vault Register", icon: <FaLock /> },
    { name: "CIT Manager", icon: <FaUsers /> },
    { name: "Audit Trail", icon: <FaClipboardList /> },
    { name: "App Settings", icon: <FaCog /> },
  ];

  return (
    <div
      className={`w-full md:w-64 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-lg md:min-h-screen transition-all duration-300 ease-in-out z-20 ${
        sidebarOpen ? "block" : "hidden md:block"
      }`}
    >
      <nav className="p-4 py-7">
        {menuItems.map((item, index) => (
          <div key={index}>
            <a
              href="#"
              onClick={item.isDropdown ? toggleOperations : undefined}
              className={`flex items-center justify-between py-2 px-4 rounded-lg ${
                item.active
                  ? "bg-blue-100 text-blue-600"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-lg mt-5">{item.icon}</span>
                <span className="text-[15px] font-medium mt-5">{item.name}</span>
              </div>
              {item.isDropdown && (
                <span className="text-lg">
                  {operationsOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </a>

            {item.isDropdown && operationsOpen && (
              <div className="pl-8 mt-1">
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className={`block py-2 px-4 rounded-lg ${
                      darkMode
                        ? "text-gray-300 hover:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-200"
                    } transition-colors duration-200 text-sm`}
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;