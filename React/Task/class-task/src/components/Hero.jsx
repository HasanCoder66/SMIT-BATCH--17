import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gray-200 p-4 rounded mt-2 mb-2 flex justify-around items-center h-[400px]'>

            <div className=' p-4 rounded mt-2 mb-2 w-[60%] '>
                <h2 className='mt-2 mb-2 text-4xl font-bold'>Hasan Ashraf <span className='text-gray-900 underline'>Full Stack Developer</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At perspiciatis saepe vero. Exercitationem blanditiis, consectetur veritatis fuga quidem iusto velit?</p>
                    <button className='rounded cursor-pointer bg-black mt-4 mb-4 text-white p-2'>Contact Me</button>
                
                </div>
            <div className=' p-4 rounded mt-2 mb-2 w-[40%] flex justify-end '>
                <img src="https://avatars.githubusercontent.com/u/140997677?v=4" alt="" className='w-[300px] h-[300px] rounded' />
            </div>
        </section>
    )
}

export default Hero