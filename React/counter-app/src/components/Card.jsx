import React from 'react'

const Card = () => {
  return (
    <div className='w-[250px] shadow-lg p-3 rounded-2xl bg-[#eeeeee] text-black flex flex-col justify-center items-center'>
        <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className='w-[100px] h-[100px] ' />
        <h3 className='text-2xl font-bold'>
            Random Heading
        </h3>
        <p className='text-sm text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id architecto porro beatae.</p>
    </div>
  )
}

export default Card