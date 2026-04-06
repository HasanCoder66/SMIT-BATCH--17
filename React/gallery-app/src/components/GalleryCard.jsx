import React from 'react'

const GalleryCard = ({ item, key }) => {
    return (
        <div key={item?.id} className='bg-gray-800/50 w-[250px] h-[200px] rounded-2xl flex justify-center items-center mb-2 flex-col' >

            <img src={item?.download_url
            } alt="" className='h-[150px] w-[200px] rounded-2xl' />

            <h2 className='mt-2 font-bold capitalize'>{item?.author}</h2>
        </div>
    )
}

export default GalleryCard