import dns from 'node:dns'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './model/UserSchema.js'


dns.setServers([
    "8.8.8.8","1.1.1.1"
])
dotenv.config()

const app = express()
const PORT = process.env.PORT || 6500

app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected!");
    } catch (error) {
        console.log(error);
    }
}


app.get("/", (req, res) => {
    res.send({
        status:true,
        message :"hello from the server"
    })
})

app.post("/user", async (req, res) => {
// console.log(req.body);
try {
    const userData = {
        // email : req.body.email,
        email : "uzairasif12@gmail.com",
        password : "13456789",
        userName : "uzair123",
        profession : "Full Stack Devloper",
        isStudent : true,
    }

    // await User.create(userData)

    const user = new User(userData)
    user.save()

if(user){
    res.json({
        status:true,
        message :"user created successfully!"
    })
}
} catch (error) {
    return res.status(400).json({
        status:false,
        message : error.message
    })
}
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
    connectDB()
})