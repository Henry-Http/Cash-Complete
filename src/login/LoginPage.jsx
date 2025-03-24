import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/slices/authSlice";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import logo from "../assets/images/cash-logo.png";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDarkMode = useCallback(() => {
    console.log("Toggling dark mode");
    setDarkMode((prev) => !prev);
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError("");
      if (username === "test" && password === "123456") {
        console.log("Login successful, navigating to /otp");
        dispatch(login({ username }));
        navigate("/otp", { replace: true });
      } else {
        setError("Invalid username or password. Please use 'test' and '123456'.");
      }
    },
    [username, password, dispatch, navigate]
  );

  console.log("LoginPage rendered");

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-6">
          <img src={logo} alt="" className="w-[120.91px] h-[70px]" />
        </div>

        <div
          className={`p-8 rounded-lg shadow-lg w-auto ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Log In</h2>
          {error && (
            <p className="text-red-500 text-sm w-60 text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-2">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaUser className="text-gray-500" />
                </span>
                <input
                  type="text"
                  placeholder="Your email address or username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`w-full pl-10 pr-3 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="text-gray-500" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full pl-10 pr-10 py-2 rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
          </form>

          <div className="flex justify-between mt-4 text-sm">
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              Forgot Password?
            </a>
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-500"
              }`}
            >
              Get Help
            </a>
          </div>
        </div>

        <div className="mt-6 flex space-x-4 text-sm">
          <a
            href="#"
            className={`${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-600 hover:text-gray-500"
            }`}
          >
            Help
          </a>
          <a
            href="#"
            className={`${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-600 hover:text-gray-500"
            }`}
          >
            Privacy
          </a>
          <a
            href="#"
            className={`${
              darkMode
                ? "text-gray-400 hover:text-gray-300"
                : "text-gray-600 hover:text-gray-500"
            }`}
          >
            Terms
          </a>
        </div>

        <p
          className={`mt-4 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © 2022 BlueChip Technologies, LTD. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;