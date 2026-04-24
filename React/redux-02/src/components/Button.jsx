import React from 'react'

const Button = React.memo(({ title, signupHandler }) => {
  return (
    <button className='w-full bg-[#292930] py-2 rounded-2xl text-white mt-4 mb-4 cursor-pointer active:scale-98' onClick={signupHandler}>{title}</button>
  )
})

export default Button