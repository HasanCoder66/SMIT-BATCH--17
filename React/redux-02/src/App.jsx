import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'

const App = () => {
  return (
    <Routes>

<Route path='/' element={<h1>Han jani</h1>} />
<Route path='/login' element={<Login />} />
<Route path='/signup' element={<Signup />} />
<Route path='/dashboard' element={<Dashboard />} />

    </Routes>
  )
}

export default App