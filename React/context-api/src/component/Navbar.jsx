import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {

    const [theme, toggelTheme] = useContext(ThemeContext)
// console.log(theme)
  return (
    <div>

<h2>Navbar</h2>

<ul>
    <li>
        Home
    </li>
    <li>
        About
    </li>
    <li>
        Contact
    </li>
    <li>
        {theme}
    </li>
</ul>

<button onClick={toggelTheme}>Change Theme</button>

    </div>
  )
}

export default Navbar