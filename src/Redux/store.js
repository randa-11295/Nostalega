import { configureStore } from '@reduxjs/toolkit'
import rejesterSlice from "./sliceReducers/rejesterSlice"
import notificationsSlice from "./sliceReducers/notificationsSlice"



export const store = configureStore({
  reducer: {
    isLogin : rejesterSlice ,
    isOpen : notificationsSlice , 
  },
})
