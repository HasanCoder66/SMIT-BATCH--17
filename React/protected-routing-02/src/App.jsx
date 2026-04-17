import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'

const App = () => {

  return (
    // <div className="text-3xl font-bold underline">App</div>
    <>

      {/* <Routes>

        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
        <Route path="/login" element={<PublicRoute><Login /> </PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /> </PublicRoute>} />

      </Routes> */}

      <Routes>
        {/* Protected Layout */}
        <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<PublicRoute><AuthLayout /></PublicRoute>}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Route>


      </Routes>
    </>
  )
}

export default App