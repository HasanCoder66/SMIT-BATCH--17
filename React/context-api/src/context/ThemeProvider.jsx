import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()
console.log(ThemeContext)

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("dark")


    const toggleTheme = () => {
        setTheme((prev) => prev == "light" ? "dark" : "light")
    }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider