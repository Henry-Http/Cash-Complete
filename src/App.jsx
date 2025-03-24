import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "./store/store";
import LoginPage from "./login/LoginPage";
import OtpPage from "./otp/OtpPage";
import ControlTowerPage from "./pages/ControlTower/ControlTowerPage";
import FinancialMetrics from "./pages/ControlTower/components/FinancialMetrics";
import CashRequestsPage from "./pages/CashRequests/CashRequestsPage";
import RequestDetailsPae from "./pages/CashRequests/components/RequestDetailsPage"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("ProtectedRoute check, isAuthenticated:", isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AuthRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("AuthRoute check, isAuthenticated:", isAuthenticated);
  return isAuthenticated ? <Navigate to="/otp" replace /> : children;
};

const App = () => {
  console.log("App rendered");
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute>
                <LoginPage />
              </AuthRoute>
            }
          />
          <Route
            path="/otp"
            element={
              <ProtectedRoute>
                <OtpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/control-tower"
            element={
              <>
                <ControlTowerPage />
              </>
            }
          />
          <Route
            path="/cash-requests"
            element={
              <>
                <CashRequestsPage />
              </>
            }
          />
          <Route path="/cash-requests/:id" element={<RequestDetailsPae />} />
          <Route
            path="/FinancialMetrics"
            element={
              <>
                <FinancialMetrics />
              </>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
