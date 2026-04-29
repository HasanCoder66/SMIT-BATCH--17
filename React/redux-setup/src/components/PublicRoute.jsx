import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({children}) => {
  const {currentUser} = useSelector((state) => state.auth)

  if(currentUser) return <Navigate to={"/dashboard"} />
  
    return children
}

export default PublicRoute