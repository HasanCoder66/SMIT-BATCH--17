import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Home = () => {
const [user, login, logout] = useContext(AuthContext)
  return (
    <div>
      <button onClick={logout} className='p-2 bg-slate-500 rounded-2xl text-white font-bold px-5 cursor-pointer'>
      Logout
    </button>
    </div>
  )
}

export default Home