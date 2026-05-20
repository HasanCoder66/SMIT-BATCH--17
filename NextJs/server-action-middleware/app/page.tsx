import { registerUser } from '@/action/user'
import React from 'react'

const Home = () => {
  return (
    <form action={registerUser} className='m-5'>
      <div className='mb-3'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' id='name'className='border border-gray-500' />
      </div>
      <div className='mb-3'>
        <label htmlFor="add">Address</label>
        <input type="text" name='add' id='add' className='border border-gray-500' />
      </div>

      <div>
        <button className='bg-gray-500 p-2 rounded-2xl text-white cursor-pointer'>Submit Form</button>
      </div>
    </form>
  )
}

export default Home