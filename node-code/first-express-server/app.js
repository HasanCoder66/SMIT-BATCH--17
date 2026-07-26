// console.log("js is running");


// const express = require("express")
import express from 'express'
let users = [
    // {
        //     name: "ayaan faheem",
        //     age: 13,
        //     email: "ayanfaheem@gmail.com"
        // },
        // {
            //     name: "ayaan hashmi",
            //     age: 18,
            //     email: "ayanhashmi@gmail.com"
            // },
        ]
        
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  
    res.status(200).send("hello from the server.")
})


app.get("/users", (req, res) => {
    res.status(200).send(users)
})

app.post("/user", (req, res) => {

    users.push(req.body);

    return res.status(200).json({
        status:true,
        message:"user added successfully"
    })
})



app.listen(5500, () => {
    console.log(`server is listening on port:5500`);
})