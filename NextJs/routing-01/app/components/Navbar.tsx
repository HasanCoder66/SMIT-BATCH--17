import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='mb-5 flex justify-between px-4'>
        <h1>Logo</h1>

        <ul className='flex gap-5'>
            <Link href={"/"}><li>Home </li></Link>
          <Link href={"/about"}><li>About</li></Link>  
            <Link href={"/service"}><li>Service</li></Link>
        </ul>
    </div>
  )
}

export default Navbar