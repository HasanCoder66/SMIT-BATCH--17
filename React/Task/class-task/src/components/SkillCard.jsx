import React from 'react'

const SkillCard = ({skill}) => {
  return (
    <div className='h-[150px] w-[150px] rounded bg-gray-400 p-4 flex justify-center items-center shadow-md'>{skill}</div>
  )
}

export default SkillCard