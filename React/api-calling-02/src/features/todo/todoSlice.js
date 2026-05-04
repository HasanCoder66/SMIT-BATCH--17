import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTodos = createAsyncThunk("getTodos" , async () => {
  try {
    console.log("api chliii")
  const apiRes = await axios.get("https://jsonplaceholder.typicode.com/todos")
  
  const {data} = apiRes
  return data
  } catch (error) {
    console.log(error)
  }
})

const initialState = {
todos : [],
loading: false,
error : false,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},

  extraReducers : (builder) => {

builder

.addCase(getTodos.pending, (state) => {
  state.error = null
  state.loading = true
})
.addCase(getTodos.fulfilled,(state, action) => {
  state.loading = false,
  state.error = null,
  state.todos = action.payload
})
.addCase(getTodos.rejected,(state) => {
  state.loading = false,
  state.error = "something went wrong"
})
  }
})


export default todoSlice.reducer