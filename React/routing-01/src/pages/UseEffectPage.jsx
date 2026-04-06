import React, {useEffect, useState} from 'react'

const UseEffectPage = () => {
    const [count, setCount] = useState(10)
    const [num, setNum] = useState(100)
    // console.log("hello")

    
    useEffect(() => {
        console.log("use Effect is running!")
    },[count])

    // const random = () => {
    //     console.log("janiii")
    // }

    // random()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>

        <h2 className="font-bold text-5xl mb-5">{num}</h2>
        <div>
            <button onClick={() => setNum(num + 5)}  className="cursor-pointer hover:bg-gray-800 bg-gray-500 p-2 rounded mr-2 text-white">Increment by 5</button>
            
        </div>
        <h2 className="font-bold text-5xl mb-5">{count}</h2>

        <div>
            <button onClick={() => setCount(count + 1)}  className="cursor-pointer hover:bg-gray-800 bg-gray-500 p-2 rounded mr-2 text-white">Increment</button>
            <button onClick={() => setCount(count - 1)} className="cursor-pointer hover:bg-gray-800 bg-gray-500 p-2 rounded ml-2 text-white">Decrement</button>
        </div>
    </div>
  )
}

export default UseEffectPage