import { TextField } from '@mui/material'
import React from 'react'

const InputCmp = ({label, value, handlerStateUpdate,field}) => {
  return (
    <TextField
    onChange={(e) => {
        handlerStateUpdate(field, e.target.value)
    }}
    id="outlined-basic" label={label} value={value} variant="outlined" sx={{
        width:"100%",
        height:"100%"
    }} />
  )
}

export default InputCmp