// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./slices/testSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; 

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});