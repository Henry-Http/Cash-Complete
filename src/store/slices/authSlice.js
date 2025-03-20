import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  otpSent: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.otpSent = true;
    },
    verifyOtp: (state) => {
      state.otpSent = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.otpSent = false;
    },
  },
});

export const { login, verifyOtp, logout } = authSlice.actions;
export default authSlice.reducer;