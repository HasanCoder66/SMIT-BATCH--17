import React from 'react'
import ButtonCmp from './components/ButtonCmp'
import { Box, ButtonGroup, Paper, Typography } from '@mui/material'
import InputCmp from './components/InputCmp'
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'

const App = () => {
  return (
<Routes>

<Route path='/login' element={<Login />} />

</Routes>
  )
}

export default App