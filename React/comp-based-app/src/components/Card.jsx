import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
     <div className='card' 
     style={{ backgroundColor:"black", color:"white"}}
     >
      <h1>{props.username}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card


// props destructing 
// import React from 'react'

// const Card = ({username, description}) => {
//     // console.log(props)
//   return (
//      <div className='card' 
//      style={{ backgroundColor:"black", color:"white"}}
//      >
//       <h1>{username}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }

// export default Card