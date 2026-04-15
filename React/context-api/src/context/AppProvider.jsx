import React from 'react'
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AuthProvider>
    )
}

export default AppProvider