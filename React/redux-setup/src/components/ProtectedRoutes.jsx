import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const {currentUser} = useSelector((state) => state.auth)

  console.log(currentUser)
  if(!currentUser) return <Navigate to={"/login"} />
  
    return children
}

export default ProtectedRoutes