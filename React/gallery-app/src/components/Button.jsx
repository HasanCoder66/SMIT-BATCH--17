import React from 'react'

const Button = ({title, handlePage}) => {
  return (
    <button onClick={() => {
        handlePage(title)
    }} className='p-2 bg-black/50 rounded font-bold cursor-pointer h-[40px] w-[70px]'>{title}</button>
  )
}

export default Button