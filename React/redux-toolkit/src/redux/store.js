import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counter/counterSlice.js'
export const store = configureStore({
    reducer :{
        counter : counterReducer,
        // user : userReducer,
    }
})