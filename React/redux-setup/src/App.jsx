import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import ProtectedRoutes from './components/ProtectedRoutes'
import PublicRoute from './components/PublicRoute'

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<h1>Han jani</h1>} />
      <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
      <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path='/dashboard' element={<ProtectedRoutes><Dashboard /> </ProtectedRoutes>} />

    </Routes>
  )
}

export default App