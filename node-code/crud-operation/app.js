import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import dns from 'node:dns'

dns.setServers([
        "1.1.1.1",
        "8.8.8.8"
])

dotenv.config()
const app = express()

console.log("env file", process.env.PORT);


const connectDb = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI);
       console.log("DB Connected");
    } catch (error) {
        console.log(error);
    }
}



// middleware
app.use(express.json())

app.use((req, res,next) =>{
    console.log("middleware mai request ayee...");

    next()
})

// app.use((req, res,next) =>{
//     console.log("second middleware mai request ayee...");

//    req.requestTime = new Date().toISOString()
//    next()
// })



// app.use((req, res,next) =>{
//    let isUser = false;

//    if(isUser) return next()

//    return res.status(400).json({
//     status : false,
//     message:"bad request"
//    })
// })

app.use(morgan("combined"))

let users = []

app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Hello from the server!",
        // time : req.requestTime
    })
})



app.post("/user", (req, res) => {

    // console.log("request -->", req.body);

    const userObj = req.body;

    users.push(userObj)

    res.status(201).json({
        status: true,
        message: "user created",
    })
})


app.get("/user", (req, res) => {

    res.status(200).json({
        status: true,
        message: "all users retrieved",
        data: users
    })
})

app.get("/user/:username",(req, res) => {

    // console.log("req params -->",req.params.username);

    const { username } = req.params;

    const findUserByUsername = users.find((user) => user.username == username)

    console.log("find user -->", findUserByUsername);

    if (findUserByUsername) {
        res.status(200).json({
            status: true,
            message: `single user data fetched`,
            data: findUserByUsername
        })

    } else {
        res.status(400).json({
            status: false,
            message: "user not found"
        })
    }


})


app.put("/user/:username", (req, res) => {

    const { username } = req.params;
    const updatedData = req.body;

    users = users.map((user) => {
        if (user.username == username) {
            return user = updatedData
        }

        return user
    })

    res.status(200).json({
        status: true,
        message: `user updated successfully`,
    })


})

app.delete("/user/:username", (req, res) => {

    const {username} = req.params;

    users = users.filter((user) => user.username != username)
    
    res.status(200).json({
        status: true,
        message: "user deleted"
    })
})

app.listen(6500, () => {
    console.log(`server is listening on port 6500`);
    connectDb()
})