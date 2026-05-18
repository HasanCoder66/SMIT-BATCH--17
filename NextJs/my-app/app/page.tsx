import React from 'react'
import Navbar from './components/Navbar'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <Navbar />
      <Link href='/about' >About</Link>
    </div>
  )
}

export default page
