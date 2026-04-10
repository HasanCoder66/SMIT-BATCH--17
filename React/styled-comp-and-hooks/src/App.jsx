import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useToggle } from './hooks/togglehook'
import ButtonCmp from './components/ButtonCmp'
import Modal from './components/Modal'

const App = () => {


  const [open, toggle] = useToggle()

  return (
    <div>
      <Navbar toggle={toggle} />

 <Sidebar  open={open} toggle={toggle}/>


<ButtonCmp title={"Open Modal"} handler={toggle} />


<Modal  open={open} toggle={toggle} />
    </div>
  )
}

export default App