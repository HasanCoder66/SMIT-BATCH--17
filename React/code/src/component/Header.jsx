import React from 'react'
import HeaderList from './HeaderList'

const Header = ({title}) => {
    console.log(title)
  return (
    <div className='w-full h-[50px] bg-red-500 rounded-2xl p-2 flex justify-between items-center'>
        <h1>{title}</h1>
        <HeaderList title={title} >
          <li>Portfolio</li>
          <li>Services</li>
        </HeaderList>
    </div>
  )
}

export default Header