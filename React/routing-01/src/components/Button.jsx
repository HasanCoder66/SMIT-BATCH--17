import React from 'react'
import { useNavigate } from 'react-router-dom'


const Button = ({title, path}) => {
 const navigate = useNavigate()

      
  return (
    <button onClick={() => navigate(path)} className='bg-black mb-2 text-white rounded-2xl px-4 py-1.5 cursor-pointer hover:scale-110 transition-all duration-300'>{title}</button>
  )
}

export default Button