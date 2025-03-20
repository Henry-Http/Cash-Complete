import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { verifyOtp } from "../store/slices/authSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/images/cash-logo.png";

const OtpPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, otpSent } = useSelector((state) => state.auth);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleChange = (element, index) => {
    const value = element.value;
    if (isNaN(value) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (paste.length === 6 && !isNaN(paste)) {
      const newOtp = paste.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const enteredOtp = otp.join("");
    if (enteredOtp === "123456") {
      dispatch(verifyOtp());
      navigate("/control-tower", { replace: true });
    } else {
      setError("Invalid OTP. Please use '123456'.");
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  console.log("OtpPage rendered, isAuthenticated:", isAuthenticated, "otpSent:", otpSent);

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
          className={`p-8 rounded-lg shadow-lg w-[340px] md:w-auto ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } transition-colors duration-300`}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Enter OTP</h2>
          <p className="text-sm text-center mb-6">
            We’ve sent a 6-digit code to your email. Please enter it below.
          </p>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className={`w-10 h-10 md:w-12 md:h-12 text-center text-lg rounded-lg border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-800"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Verify
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            <p>
              Didn’t receive the code?{" "}
              <a
                href="#"
                className={`${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-500"
                }`}
              >
                Resend OTP
              </a>
            </p>
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

export default OtpPage;