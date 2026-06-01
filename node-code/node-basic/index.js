const fs = require("fs")
const http = require("http")
const url = require("url")



const server = http.createServer((req, res) => {
    // console.log(req.url);

    const pathname = req.url


    if(pathname == "/"){
        res.end("home page pr ho...")
    }else if(pathname == "/about") {
        res.end("aap about pr ho")
    } else if(pathname == "/shop/toy"){
        res.end("toy sale successfuly")
    }else{
        // res.end("hello from the server.")
        res.writeHead(404,{
            "Content-type":"text/html"
        })
        res.end("page not found!")
    }



    // if (pathname == "/doodh") {
    //     res.end("yeloo doodh")
    // } else if (pathname == "/dahi") {
    //     res.end("yeloo tmhara dahiii")
    // }

    // else {
    //     res.end("hello from the server.")

    // }

})

server.listen(3000, "127.0.0.1", () => {
    console.log(`server is listenting on port 3000`);
})


// console.log("janii");

// let userName = "Ayaan Faheem";

// console.log(userName);

// let returnReadFile = fs.readFileSync("random.txt", "utf-8")


// fs.writeFileSync("text.txt", "han jani kiaa haal hai..")

// let paragraphFromTextTxt = fs.readFileSync("text.txt", "utf-8")

// console.log(paragraphFromTextTxt);

// console.log(returnReadFile);



// fs.readFile("random.tx", "utf-8", (err, data) => {
// if(err){
//     console.log("error ayaa..", err);
//     return
// }

// if(data){
//     return console.log(data)
// }
// })