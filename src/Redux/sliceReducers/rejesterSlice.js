import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin:  false
};

export const rejesterSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    loginHandel: (state , action) => {
      localStorage.setItem("Token", action.payload)
      state.isLogin = true;
    },
    logOutHandel: (state) => {
      state.isLogin = false;
      localStorage.removeItem("Token")
    },
  },
});

export const { loginHandel, logOutHandel } = rejesterSlice.actions;

export default rejesterSlice.reducer;
