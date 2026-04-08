import { Button } from '@mui/material'
import React from 'react'

const ButtonCmp = ({title, loginHandler}) => {
  return (
    <Button 
    onClick={loginHandler}
    variant="outlined" sx={{
        marginTop:"20px"
    }}>{title}</Button>
  )
}

export default ButtonCmp