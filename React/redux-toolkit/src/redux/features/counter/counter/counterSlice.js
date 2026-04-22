import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState : 10,
    name : "counter",
 reducers: {
    increment : (state) => {
        return state +1
    },
    decrement : (state) => {
        return state  - 1
    }
}
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer