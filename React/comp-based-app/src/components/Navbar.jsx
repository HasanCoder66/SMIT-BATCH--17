import React from 'react'

const Navbar = () => {
  return (
   <nav>
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6smuTr-P5ye1wDbxWgB-VDRAWeMOzWTYL9g&s" alt="Logo" height={"50px"} width={"50px"} /></div>
    <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </div>
    <div>
        <button>Signup</button>
    </div>
   </nav>
  )
}

export default Navbar