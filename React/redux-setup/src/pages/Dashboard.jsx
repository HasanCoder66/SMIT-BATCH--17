import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/features/auth/authSlice'

const Dashboard = () => {
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.auth)

  console.log(currentUser)
  return (
    <div>
<ul>
  <li>{currentUser.userName}</li>
  <li>{currentUser.email}</li>
  <li>{currentUser.password}</li>
</ul>
<button onClick={() => dispatch(logout())}>Logout</button>


    </div>
  )
}

export default Dashboard