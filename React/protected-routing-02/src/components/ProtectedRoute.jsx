import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const [user] = useContext(AuthContext)
    console.log(user)

    if(!user) return <Navigate to="/login" />

    console.log("janii")
  return children
}

export default ProtectedRoute