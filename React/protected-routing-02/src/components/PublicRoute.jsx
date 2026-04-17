import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {

    const [user] = useContext(AuthContext)
    console.log(user)

    if(user) return <Navigate to="/" />

    console.log("janii")
  return children
}

export default PublicRoute