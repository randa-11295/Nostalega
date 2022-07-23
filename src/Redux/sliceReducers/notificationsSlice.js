import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen:  false ,
  val : null
};

export const rejesterSlice = createSlice({
  name: "isOpen",
  initialState,
  reducers: {
    openHandel: (state , action) => {
      state.isOpen = true;
      state.val = action.payload;
    },
    closeHandel: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openHandel, closeHandel } = rejesterSlice.actions;

export default rejesterSlice.reducer;
