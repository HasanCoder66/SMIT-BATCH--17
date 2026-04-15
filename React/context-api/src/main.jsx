import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import AppProvider from './context/AppProvider.jsx'

createRoot(document.getElementById('root')).render(


  <AppProvider>
    <App />
    </AppProvider>

)
