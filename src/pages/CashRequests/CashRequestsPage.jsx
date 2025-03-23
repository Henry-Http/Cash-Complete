import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CashRequestHeader from "./components/CashRequestHeader";
import NewCashRequestModal from "./components/NewCashRequestModal";
import CashRequestTable from "./components/CashRequestTable";

const CashRequestsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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

        <main className="flex-1 p-4 md:p-6 max-w-full overflow-x-hidden">
          <CashRequestHeader darkMode={darkMode} onNewRequest={openModal} />

          <CashRequestTable darkMode={darkMode} />

          <NewCashRequestModal
            isOpen={modalOpen}
            onClose={closeModal}
            darkMode={darkMode}
          />
        </main>
      </div>
    </div>
  );
};

export default CashRequestsPage;
