import React from 'react'
import Button from '../components/Button'

const NotFound = () => {
  return (
   <div className='h-[550px] flex justify-center items-center flex-col'>
        <h1 className='font-bold text-6xl underline text-red-950 mb-4' >
            Page Not Found
        </h1>

       <Button title="Go To Dashboard" path="/" />
    </div>
  )
}

export default NotFound