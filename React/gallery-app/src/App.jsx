import React, { useEffect, useState } from 'react'
import GalleryCard from './components/GalleryCard'
import axios from 'axios'
import Button from './components/Button'

const App = () => {

  const [imagesData, setImagesData] = useState([])
  const [page, setPage] = useState("1")
  const [limit, setLimit] = useState("25")


  // console.log("current Page ==>", page)
  // console.log("limit ==>", limit)

  const handlePage = (n) => {
    setPage(n)
  }

const paginationHandler = async () => {
  try {
    let result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)

    const {data} = result
    setImagesData(data)
  } catch (error) {
    console.log(error)
  }
}

  const getData = async () => {
    try {
      const result = await axios.get("https://picsum.photos/v2/list")

      // let result = await apiRes.json()

      const { data } = result
      setImagesData(data)
    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    getData()
  }, [])


  useEffect(() => {
  paginationHandler()
  },[page, limit])


  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <div className='  p-2 flex justify-center items-center gap-5 flex-wrap'>

        {imagesData.map((item) => (
          <GalleryCard item={item} />

        ))}

      </div>
      <div className='footer bg-gray-800/50 h-[100px] w-full flex justify-around items-center'>
        <div className='flex gap-3 items-center'>
          <h3 className='font-bold  text-xl'>Pages</h3>
          <Button title="1" handlePage={handlePage}  />
          <Button title="2" handlePage={handlePage} />
          <Button title="3" handlePage={handlePage} />
          <Button title="4" handlePage={handlePage} />
        </div>


        <div className='flex gap-3 items-center'>

          <h3 className='font-bold  text-xl'>Limit</h3>
          <select onChange={(event) => {
            setLimit(event.target.value)
          }} className=' p-2 w-[100px] h-[40px] cursor-pointer outline-none rounded bg-black/50'>
            <option className='bg-gray-800/50' value="25">25</option>
            <option className='bg-gray-800/50' value="50">50</option>
            <option className='bg-gray-800/50' value="100">100</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default App