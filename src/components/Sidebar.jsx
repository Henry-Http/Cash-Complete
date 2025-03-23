import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = ({ sidebarOpen, toggleSidebar, darkMode }) => {
  const [operationsOpen, setOperationsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Control Tower");
  const [activeSubItem, setActiveSubItem] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/cash-requests") {
      setActiveItem("Operations");
      setActiveSubItem("Cash Request");
      setOperationsOpen(true);
    } else if (location.pathname === "/control-tower") {
      setActiveItem("Control Tower");
      setActiveSubItem(null);
      setOperationsOpen(false);
    } else {
      setActiveItem("Control Tower");
      setActiveSubItem(null);
      setOperationsOpen(false);
    }
  }, [location.pathname]);

  const toggleOperations = () => {
    setOperationsOpen(!operationsOpen);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    setActiveSubItem(null);
    if (itemName !== "Operations") {
      setOperationsOpen(false);
    } else {
      toggleOperations();
    }

    if (itemName === "Control Tower") {
      navigate("/control-tower");
    }

    if (sidebarOpen) {
      toggleSidebar();
    }
  };

  const handleSubItemClick = (subItem) => {
    setActiveItem("Operations");
    setActiveSubItem(subItem);

    if (subItem === "Cash Request") {
      navigate("/cash-requests");
      if (sidebarOpen) {
        toggleSidebar();
      }
    }
  };

  const menuItems = [
    { name: "Control Tower", icon: <FaTachometerAlt /> },
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
        darkMode ? "bg-gray-800 md:bg-gray-900" : "bg-white md:bg-gray-100"
      } md:min-h-screen transition-all duration-300 ease-in-out z-20 ${
        sidebarOpen ? "block" : "hidden md:block"
      }`}
    >
      <nav className="ps-4 py-7">
        {menuItems.map((item, index) => (
          <div key={index}>
            <a
              href="#"
              onClick={() => handleItemClick(item.name)}
              className={`flex items-center justify-between py-4 mb-4 pt- px-4 rounded-r-2xl ${
                activeItem === item.name
                  ? "bg-blue-100 text-[#0F3677]"
                  : darkMode
                  ? "text-gray-300 hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-200"
              } transition-colors duration-200`}
            >
              <div className="flex items-center space-x-3 mb- mt-">
                <span className="text-lg">{item.icon}</span>
                <span className="text-[15px] ">{item.name}</span>
              </div>
              {item.isDropdown && (
                <span className="text-lg ">
                  {operationsOpen ? (
                    <MdArrowDropUp size={"25px"} />
                  ) : (
                    <MdArrowDropDown size={"25px"} />
                  )}
                </span>
              )}
            </a>

            {item.isDropdown && operationsOpen && (
              <div className="pl-12 mt-2">
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    onClick={() => handleSubItemClick(subItem)}
                    className={`block py-2 px-4 rounded-lg ${
                      activeSubItem === subItem
                        ? "bg-blue-100 text-blue-600"
                        : darkMode
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