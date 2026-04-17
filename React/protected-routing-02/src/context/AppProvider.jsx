import React from 'react'
import AuthProvider from './AuthProvider'
// import ThemeProvider from './ThemeProvider'

const AppProvider = ({ children }) => {
    // console.log(children)
    return (
        // <ThemeProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        // </ThemeProvider>
    )
}

export default AppProvider