import React, { useState } from "react";
import Header from "./components/Header";

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
      className={`min-h-screen flex ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <Header
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />

        {/* Main Content Placeholder */}
        <main className="p-4 md:p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Control Tower
          </h2>
          {/* Additional content will be added in future steps */}
        </main>
      </div>
    </div>
  );
};

export default ControlTowerPage;