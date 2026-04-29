import React from 'react'

const Input = React.memo(({type, placeholder, handler, field, value}) => {
  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    onChange={(e) => {
        // handler((prev) => ({...prev, [field]:e.target.value }))
        handler(field, e.target.value)
    }} 
    // value={value}
    className='w-full rounded-2xl h-[45px] outline-none pl-2 border-1 border-gray-400 '
    />
  )
})

export default Input