import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currentUser : null,
    users : []
}

const authSlice = createSlice({
    name :"auth",
    initialState,
    reducers :{
        signup:(state, action) => {
            state.users.push(action.payload)
        },
        login:(state, action) => {
            const {email ,password} = action.payload
            const user = state.users.find((user) => user.email == email && user.password == password )

            if(user){
                state.currentUser = user
            }
        },
        logout:(state) => {
            state.currentUser = null
        }
    }
})
// console.log(authSlice)

export const {signup, login , logout} = authSlice.actions
export default authSlice.reducer

// dispatch(signup(form))