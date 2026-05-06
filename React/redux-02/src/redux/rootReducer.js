import { combineReducers } from "@reduxjs/toolkit";
import authReducer from './features/authSlice/authSlice.js'

 const rootReducer = combineReducers({
        auth : authReducer,
})

export default rootReducer