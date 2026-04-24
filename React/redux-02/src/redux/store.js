import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/authSlice/authSlice.js"

export const store = configureStore({
  reducer: {
    auth : authReducer
  },
})