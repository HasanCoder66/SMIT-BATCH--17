import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const listItem = [
        {
            path : "/",
            title : "Home"
        },
        {
            path : "/dashboard",
            title : "Dashboard"
        },
        {
            path : "/login",
            title : "Login"
        },
        {
            path : "/signup",
            title : "Signup"
        },
    ]
    
  return (
    <div className='flex justify-between p-2'>
        <h1>Navbar</h1>

      <ul className='flex gap-5'>
         {listItem.map((item, i) => <Link  key={i} to={item.path}><li className='cursor-pointer' >{item.title}</li></Link>)}
      </ul>
    </div>
  )
}

export default Navbar