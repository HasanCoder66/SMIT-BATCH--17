import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const {courseId} = useParams()
    // console.log(params)
  return (
    <div className='h-[550px] flex justify-center items-center'>
        <h1 className='font-bold text-6xl underline' >
           {courseId} Course Details Page
        </h1>
    </div>
  )
}

export default CourseDetail