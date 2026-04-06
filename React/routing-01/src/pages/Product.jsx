import React from 'react'
import Button from '../components/Button'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
 


  return (
    <div className='h-[550px] flex justify-center items-center flex-col'>
        {/* <h1 className='font-bold text-6xl underline mb-5' >
            Product Page
        </h1> */}

      <div className='flex gap-6'>
        
        <Button title="Mens" path="mens" />
        
      <Button title="Womens" path="womens"/>
      
      </div>
        
        <Outlet />
    </div>
  )
}

export default Product