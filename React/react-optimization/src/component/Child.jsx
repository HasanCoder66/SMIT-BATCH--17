import React from 'react'
import { arr } from '../app.js'
arr
const Child = React.memo(({count, handler}) => {
    console.log("re rendering...")
  return (
    <div><h2>
        Child: {arr.length}</h2>
        <button >Click</button>
        </div>
  )
})

export default Child