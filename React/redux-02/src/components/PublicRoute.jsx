import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  
const {currentuser} =  useSelector((state) => state.auth)



if(currentuser) return <Navigate to="/dashboard" />
  
    return children
}

export default PublicRoute
