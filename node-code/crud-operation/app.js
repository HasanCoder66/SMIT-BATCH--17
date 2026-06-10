import express from 'express'

const app = express()

app.use(express.json())


let users = []

app.get("/", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Hello from the server!"
    })
})



app.post("/user", (req, res) => {

    // console.log("request -->", req.body);

    const userObj = req.body;

    users.push(userObj)

    res.status(200).json({
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

app.get("/user/:username", (req, res) => {

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
})