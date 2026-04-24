import React, { useState } from 'react'
import "../App.css"
import { Button, Input } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from '../redux/features/authSlice/authSlice.js'


const Signup = () => {
  const [form, setForm] = useState({
    email : "",
    password : "",
    userName : ""
  })

  const dispatch = useDispatch()
  const user = useSelector((state) => console.log(state.auth))

  const signupHandler = () => {

    if(!form.email.trim() || !form.password.trim() || !form.userName.trim()) {
      console.log("please fill all the fields")
      return 
    }

    console.log("user signup successfully!", form)
    

    dispatch(signup(form))
    // setForm({
    //   email : "",
    //   password : "",
    //   userName : ""
    // })

    console.log("update ==>")

  }

  const handlerStateUpdate  = (field , val) => {
setForm((prev) => ({...prev, [field]:val}))
  }

  return (
    <div className='p-4 rounded-2xl shadow-2xl w-[450px] bg-white '>

        <h1 className='mb-4 font-semibold text-center text-2xl'>Create your account</h1>

        <div className='flex flex-wrap gap-5'>
            <Input
            type="text"
            placeholder="Enter your username"
            value = {form.userName}
            field="userName"
            // handler={setForm}
            handler={handlerStateUpdate}
            />
            <Input
            type="text"
            placeholder="Enter your email"
            value = {form.email}
            field="email"
            // handler={setForm}
            handler={handlerStateUpdate}
            />
            <Input
            type="text"
            placeholder="Enter your password"
            value = {form.password}
            field="password"
            // handler={setForm}
            handler={handlerStateUpdate}
            />
        </div>

        <div>
          <Button title={"Signup"} signupHandler={signupHandler}/>
        </div>
    </div>
  )
}

export default Signup