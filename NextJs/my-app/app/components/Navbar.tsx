'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-500 text-white flex justify-around py-4'>
      <div>Logo</div>
      <ul className='flex gap-4'>
        <Link href='/' className='cursor-pointer hover:bg-blue-400 rounded px-3 py-2'>About</Link>
        <Link href='/about' className='cursor-pointer hover:bg-blue-400 rounded px-3 py-2'>Contact</Link>
        <Link href='/contact' className='cursor-pointer hover:bg-blue-400 rounded px-3 py-2'>Home</Link>
      </ul>
    </nav>
  )
}

export default Navbar
