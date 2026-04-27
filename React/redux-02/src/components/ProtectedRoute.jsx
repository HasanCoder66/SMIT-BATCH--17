import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  
const {currentUser} =  useSelector((state) => state.auth)



if(!currentUser) return <Navigate to="/login" />
  
    return children
}

export default ProtectedRoute
