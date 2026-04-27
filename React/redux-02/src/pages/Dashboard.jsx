import React from 'react'
import { Button } from '../components'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/features/authSlice/authSlice'

const Dashboard = () => {

  const dispatch = useDispatch()


  const logoutHandler = () => {
    console.log("logout handler is working...");
    
    dispatch(logout())
  }

  return (
    <div>

      <ul>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>

        <Button title="Logout" handler={logoutHandler}  />
      </ul>


    </div>
  )
}

export default Dashboard