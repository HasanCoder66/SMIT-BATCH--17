import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import SkillCard from './components/SkillCard'

const App = () => {
  return (
   <div className='h-screen  flex-col items-center justify-between '>
   <Navbar />
   <Hero />
   <div className='flex justify-between flex-wrap gap-5 mb-2 mt-2 px-3'>
    <SkillCard skill={"HTML"}/>
    <SkillCard skill={"CSS"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
    <SkillCard skill={"Javascript"} />
   </div>
   <Footer />
   </div>
  )
}

export default App