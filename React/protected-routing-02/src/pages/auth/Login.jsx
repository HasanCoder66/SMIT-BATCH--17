import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Login = () => {
  const [user, login, logout] = useContext(AuthContext)
  return (
    <div><button onClick={() => {
      login({firstName:"ayaan"})
    }} className='p-2 bg-slate-500 rounded-2xl text-white font-bold px-5 cursor-pointer'>
      Login
    </button></div>
  )
}

export default Login