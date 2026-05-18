import React from "react"
import App from "../App"



const InputCmp =({type, placeholder, dispatch, field, theme}) => {

    
    return (
        <div className={theme}>
        <input type={type} placeholder={placeholder} onChange={(e) => {
            dispatch({
                type : field,
                value : e.target.value
            })
        }}/>
        </div>
    )
}


export default InputCmp

// centeralized data 


// App
// header 
// navbar
// nav 2


// create context 
// provider 
// use context