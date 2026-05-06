import React, { useState } from 'react'
import "../App.css"
import { Button, Input } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../redux/features/authSlice/authSlice.js'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [form, setForm] = useState({
    email : "",
    password : ""
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => console.log(state))

  const loginHandler = () => {

    if(!form.email.trim() || !form.password.trim() ) {
      console.log("please fill all the fields")
      return 
    }

    console.log("user login successfully!", form)
    

    dispatch(login(form))

    navigate("/dashboard")
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

        <h1 className='mb-4 font-semibold text-center text-2xl'>Welocme Back Login!</h1>

        <div className='flex flex-wrap gap-5'>
           
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
          <Button title={"Login"} handler={loginHandler}/>
          <Link to="/signup"><Button title={"create a new account"} /></Link>
        </div>
    </div>
  )
}

export default Login