// console.log("js is running");
<<<<<<< HEAD


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
=======
const connectDb = async () => {

}

const express = require("express")

let users = [
    {
        name: "ayaan faheem",
        age: 13,
        email: "ayanfaheem@gmail.com"
    },
    {
        name: "ayaan hashmi",
        age: 18,
        email: "ayanhashmi@gmail.com"
    },
]

const app = express()
>>>>>>> cb8504043c78a0112883c60770ad967db56c667d

app.get("/", (req, res) => {
  
    res.status(200).send("hello from the server.")
})


app.get("/users", (req, res) => {
    res.status(200).send(users)
})

<<<<<<< HEAD
app.post("/user", (req, res) => {

    users.push(req.body);

    return res.status(200).json({
        status:true,
        message:"user added successfully"
    })
})

=======
>>>>>>> cb8504043c78a0112883c60770ad967db56c667d


app.listen(5500, () => {
    console.log(`server is listening on port:5500`);
})