import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import { ThemeContext } from './context/ThemeProvider'
import { AuthContext } from './context/AuthProvider'


const App = () => {
const [theme] =useContext(ThemeContext)

const [user, login, logout] = useContext(AuthContext)
console.log(user)

  return (
    <div className={theme}>
<Navbar />

<button onClick={() => {
login({
  email :"codermhasan@gmail.com",
  password : "codermhasan"
})
}}>Login</button>
<button onClick={() => {
logout()
}}>Logout</button>

    </div>
  )
}

export default App