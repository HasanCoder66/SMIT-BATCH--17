import React, { useState } from 'react'

const Card = (props) => {
    console.log(props)

    

    const [user, setUser] = useState("Hasan")
    const [desc, setDescription ]= useState("hey user kia haal chaal")

    const editDetails = () => {
      setUser("Jani")
      setDescription("hey jani kia haal chaal hain.")
    }
  return (
     <div className='card' 
     style={{ backgroundColor:"black", color:"white"}}
     >
      <h1>{user}</h1>
      {/* <h1>{props.title}</h1> */}
      {/* <p>{props.description}</p> */}
      <p>{desc}</p>

      <button onClick={editDetails}>Edit</button>
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