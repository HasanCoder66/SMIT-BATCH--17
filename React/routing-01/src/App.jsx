import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import CourseDetail from './pages/CourseDetail'
import Product from './pages/Product'
import Mens from './pages/Mens'
import Womens from './pages/Women'
import UseEffectPage from './pages/UseEffectPage'

const App = () => {
  return (

    <div className='h-screen bg-gray-400 '>

      {/* <Navbar /> */}
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/useEffect' element={<UseEffectPage />} />

        <Route path='/product' element={<Product />} > 
         <Route path='mens' element={<Mens />} />
        <Route path='womens' element={<Womens />} /> 
        </Route>
       
       
        {/* <Route path='/product/mens' element={<Mens />} />
        <Route path='/product/womens' element={<Womens />} /> */}

        
        <Route path='*' element={<NotFound />} />

      </Routes>
      {/* <Footer /> */}
    </div>
    // <div className="text-3xl font-bold underline">App</div>
  )
}

export default App