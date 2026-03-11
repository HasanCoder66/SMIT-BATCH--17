import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='h-screen flex justify-between items-center flex-col '>
      <Header title="Navbar" />
      <Hero />
      <Footer />
    </div>
  )
}

export default App