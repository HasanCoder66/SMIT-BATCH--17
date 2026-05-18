import { useContext, useReducer, useState } from "react"
import InputCmp from "./component/InputCmp";
import ThemeData from "./context/ThemeContext";

const App = () => {
  let [theme, toggleTheme] = useContext(ThemeData)
  console.log(theme)
  // const [count, setCount] = useState(0);

//   const reducerFn = (state, action) => {
// console.log("State ==>",state, );
// console.log("Action ==>",action);

// if(action.type == "Increment"){
//   return state + 1
// }
// if(action.type == "Decrement"){
//   return state -1 
// }

//   }

const initialState ={
  email :"",
  password : "",
  age : 22
}

const reducerFn = (state, action) => {
console.log("State ==>", state);
console.log("action ==>", action);

return{
...state,
[action.type] : action.value
}

}



  const [state, dispatch] = useReducer(reducerFn, initialState)


  const submitHandler =() => {
  console.log("mai chlaaa ==>", state);
  
}
  return (
    // <>
    //   Count Value {state}

    //   <button onClick={() => {
    //     dispatch({
    //       type : "Increment"
    //     })
    //   }}>Increment</button>
    //   <button onClick={() => {
    //      dispatch({
    //       type : "Decrement"
    //     })
    //   }
    //   }>Decrement</button>
    // </>

    <>
    <InputCmp theme={theme} placeholder={"Enter Your Email Address"} type={"text"} dispatch={dispatch} field="email" />
    <InputCmp placeholder={"Enter Your Password"} type={"password"} dispatch={dispatch} field="password" />

    <button onClick={submitHandler}>Submit</button>
    </>
  )

}

export default App