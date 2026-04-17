import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const isUser = JSON.parse(localStorage.getItem("isUser"))
    console.log(isUser)
    const [user, setUser] = useState(isUser || null)

    const login = (user) => {
        console.log("hey user" , user?.firstName)
        if(!user) return
        
        localStorage.setItem("isUser", JSON.stringify(true))
        // console.log("user chlaaa")
        setUser(true)
    }

    const logout= () => {
        setUser(null)
         localStorage.setItem("isUser", JSON.stringify(null))
    }

  return (
    <AuthContext.Provider value={[user, login, logout]}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider