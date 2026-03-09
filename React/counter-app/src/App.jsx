// import React from 'react'
// import Card from './components/Card'

// function App (){
//   return(
//     <div className=' flex gap-[10px] flex-wrap'>
//     <Card />
//     <Card />
//     <Card />
//     <Card />
//     </div>
//   )
// }


// export default App




import React, { useState } from 'react'

function App (){

  const [count, setCount] = useState(10)

const handleIncrement = () => {
  setCount(count + 1)
}  
const handleDecrement = () => {
  setCount(count - 1)
}
const handleReset = () => {
  setCount(0)
}
  
  return(
    <div className='flex flex-col justify-evenly items-center p-3 rounded-2xl w-[300px] h-[300px] bg-[#eeeeee] text-black'>
    <h2 className={`text-gray-500 ${count < 0 ? "text-red-500":"text-green-500"}  text-5xl font-bold`}>{count}</h2>

    <div className='flex gap-[20px]'>
      <button 
      // onClick={handleIncrement}
      onClick={() => setCount(count + 1)}
      className='py-2 px-4 bg-green-700 rounded-2xl text-white hover:bg-green-900 transition-all duration-300 cursor-pointer'>Increment</button>
      <button 
      // onClick={handleDecrement} 
      onClick={() => setCount(count - 1)}
      className='py-2 px-4 bg-red-700 rounded-2xl text-white hover:bg-red-900 transition-all duration-300 cursor-pointer'>Decrement</button>
    </div>
    <div className='flex gap-[20px]'>
      <button className='py-2 px-4 bg-gray-700 rounded-2xl text-white hover:bg-gray-900 transition-all duration-300 cursor-pointer'
      //  onClick={handleReset}
      onClick={() => setCount(0)}
       >Reset</button>
      
    </div>
    </div>
  )
}


export default App