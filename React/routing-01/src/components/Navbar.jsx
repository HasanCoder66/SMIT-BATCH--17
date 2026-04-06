import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const listItem = [
        { title: "Home", path: "/" },
         { title: "About", path: "/about" },
          { title: "Courses", path: "/courses" },
           { title: "Contact", path: "/contact" },
            { title: "Services", path: "/services" },
            { title: "Product", path: "/product" }
        ]
    return (
        <div className='flex justify-between  items-center px-4 py-2 shadow-2xl bg-gray-300'>
            <div>
                <h1 className='font-bold text-2xl'>React Router Dom</h1>
            </div>

            <div>
                <ul className='flex gap-6'>
                    {listItem.map((item, i) => (
                        <li key={i} className='font-semibold cursor-pointer'>
                            <Link to={item.path}>{item.title}</Link>
                            {/* <a href={item.path}>{item.title}</a> */}
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    )
}

export default Navbar