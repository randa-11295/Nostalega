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
    checkIsLog : (state , action)=>{
      console.log(action)
      state.isLogin = action.payload;
    }
  },
});

export const { loginHandel, logOutHandel ,checkIsLog} = rejesterSlice.actions;

export default rejesterSlice.reducer;
