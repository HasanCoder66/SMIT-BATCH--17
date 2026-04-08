import { Box, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputCmp from '../components/InputCmp'
import ButtonCmp from '../components/ButtonCmp'
import "../styles/login.css"
const Login = () => {
    //use states

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handlerValChange = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    const loginHandler = () => {
        console.log(
            "login handler is working!", form
        )
        setForm({
            email : "",
            password:""
        })
    }

    return (
        <Paper elevation={3} sx={{
            height: "300px",
            width: "300px",
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        }}>

            <Typography sx={{
                fontWeight: "bold",
                fontSize: "32px"
            }}>Welcome Back!</Typography>

            <Box sx={{
                width: "100%",
                height: "50px",
                marginBottom: "12px",
                marginTop: "12px",
            }}>
                <InputCmp label={"Enter your Email"} value={form?.email} handlerStateUpdate={handlerValChange} field={"email"} />

            </Box>

            <Box sx={{
                width: "100%",
                height: "50px",
                marginBottom: "12px",
                marginTop: "12px",
            }}>
                <InputCmp label={"Enter your Password"} value={form?.password} handlerStateUpdate={handlerValChange} field={"password"} />
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "center",

            }}>
                <ButtonCmp title="Login" loginHandler={loginHandler} />
            </Box>
        </Paper>
    )
}

export default Login