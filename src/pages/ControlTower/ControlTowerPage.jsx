import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import DashboardStats from "./components/DashboardStats";
import FinancialMetrics from "./components/FinancialMetrics";
import AtmStatus from "./components/AtmStatus";
import RequestTable from "./components/RequestTable";

const ControlTowerPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <Header
        toggleSidebar={toggleSidebar}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />

      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          darkMode={darkMode}
        />

        <main className="flex-1 p-4 md:p-6">
          <DashboardStats darkMode={darkMode} />
          <div className="mt-12">
            <FinancialMetrics darkMode={darkMode} />
          </div>
          <div className="mt-8 sm:mt-12">
            <AtmStatus darkMode={darkMode} />
          </div>
          <div className="mt-8 sm:mt-12">
            <RequestTable darkMode={darkMode} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ControlTowerPage;
