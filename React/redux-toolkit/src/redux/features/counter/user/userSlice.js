import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState : 0,
    name : "counter",
 reducers: {
    // increment : (state) => {
    //     return state +1
    // },
    // decrement : (state) => {
    //     return state  - 1
    // }
}
})

export const {increment, decrement} = userSlice.actions
export default userSlice.reducer