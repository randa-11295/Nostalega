import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
};

export const rejesterSlice = createSlice({
  name: "isLogin",
  initialState,
  reducers: {
    loginHandel: (state) => {
      state.isLogin = true;
    },
    logOutHandel: (state) => {
      state.isLogin = false;
    },
  },
});

export const { loginHandel, logOutHandel } = rejesterSlice.actions;

export default rejesterSlice.reducer;
