import { configureStore } from '@reduxjs/toolkit'
import rejesterSlice from "./sliceReducers/rejesterSlice"


export const store = configureStore({
  reducer: {
    isLogin : rejesterSlice
  },
})
