const fs = require("fs")
const http = require("http")
const url = require("url")




// console.log("hello world!");

// let paragraph = "han bhaii kia haal hain bachooo"
// fs.writeFileSync("text.txt",paragraph )




// let readFile = fs.readFileSync("text.txt", "utf-8")
// console.log(readFile);

// let readFile = fs.readFile("text.tx", "utf-8", (err, data) => {
//     if(err){
//        return console.log(err);
//     }
//     console.log(data);
// })
// console.log(readFile);


const server = http.createServer((req, res) => {
    // console.log("request url-->",req.url);

    const pathname = req.url;

    if (pathname == "/") {
        res.end("hello from the server!")

    } else if (pathname == "/shoes") {
        res.end("yelooo shoes")
    } else if (pathname == "/clothes") {
        res.end("yelooo clothes")
    }else if (pathname == "/jewellery") {
        res.end("yelooo jewellery")
    }else {
        res.end("<h1>page not found </h1>")
    }
})

server.listen(5500, () => {
    console.log("server is listening");
})