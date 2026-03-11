import React from 'react'

const Child = React.memo(() => {
    
    console.log("Render ==> howa ==>")
  return (
    <div>Child</div>
  )

})

export default Child