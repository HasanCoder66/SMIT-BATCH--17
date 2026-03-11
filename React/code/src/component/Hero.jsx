import React, { useState } from 'react'
import Child from './Child'

const Hero = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-4'>Hero {count}</h1>
      
          <button className='bg-[#eeeeee] text-black font-bold p-3 rounded-2xl cursor-pointer' onClick={() => setCount(count + 1)}>Increment</button>
      
      <Child />
    </div>
  )
}

export default Hero