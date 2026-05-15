"use client"

import React from 'react'

const error = ({error}:{error : Error}) => {
  return (
    <div>error page chlaaa 

        <p>{error.message}</p>
    </div>
  )
}

export default error