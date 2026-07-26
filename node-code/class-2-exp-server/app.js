// console.log("hello world!");

const express = require("express")


const app = express()

app.use(express.json())

// routing
// let user = {
//     name :"saad",
//     email :"saad@gmail.com"
// }


let users = []


app.post("/user", (req, res) => {
const userObj = req.body;

console.log("req body -->",userObj);

users.push(userObj)

console.log("updated users array -->",users);

res.status(201).send("user created")
})



app.get("/user", (req, res) =>{
    res.status(200).json({
        status: "success",
        users,
        message : "user retrieve successfully"
    })

    // res.send("user -->")
})

app.listen(5500, () => {
    console.log(`server is listening on port 5500`);
})