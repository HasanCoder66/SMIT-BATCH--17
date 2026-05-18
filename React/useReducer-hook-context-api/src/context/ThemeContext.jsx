import React, { createContext, useState } from 'react'



let ThemeData = createContext("light");
console.log(ThemeData);
const ThemeContext = ({children}) => {
    
    const [theme, setTheme] = useState("light")

    const toggleTheme =() => {
        setTheme((prev) => prev == "light" ? "dark" : "light")
    }

  return (
    <ThemeData.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeData.Provider>
  )
}

export default ThemeContext
