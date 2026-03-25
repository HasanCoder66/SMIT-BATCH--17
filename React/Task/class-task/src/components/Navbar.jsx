import React from 'react'

const Navbar = () => {
    const listItems = ["About", "Contact", "Skills"]
  return (
  <>
  <nav className='flex justify-between bg-gray-300 shadow-md h-[50px] px-4 items-center'>
   <h2>Portfolio</h2>
    <ul className='flex justify-between gap-5'>
       {listItems.map((item) => (
        <li className='font-bold text-[16px]'>{item}</li>
       ))}
    </ul>
  </nav>
  </>
  )
}

export default Navbar