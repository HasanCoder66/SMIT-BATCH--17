console.log("JavaScript Running -->");


let myObj = {
    name : "hasan",
    admin : true,
    skills : ["html",]
}
let name = "name"

// console.log(myObj.skills.push("css"))


// myObj.class = "modern web "

// console.log(myObj)


// for (let key in myObj) {
//     console.log(myObj[key])
// }

// console.log(myObj)
// // console.log("name" in myObj)

// console.log(myObj.hasOwnProperty("name"))



// function GetFullName () {
//     this.name = "hasn"
// }

// console.log(new GetFullName())






// let personData = {
//     name : "khalid",
//     email : "khalid@gmail.com",
//     phone : 987415,
//     address : "32465456e3rasdfjasdfka;s"
// }


// console.log(personData)


// console.log(Object.keys(personData))
// let keys = Object.keys(personData)

// for (let i =0 ; i < keys.length; i++){
//     console.log(personData[keys[i]])
// }



// console.log(Object.entries(personData))






// let personData = {
//     name : "khalid",
//     email : "khalid@gmail.com",
//     phone : 987415,
//     address : "32465456e3rasdfjasdfka;s"
// }

// let strData = JSON.stringify(personData)
// console.log(strData)


// console.log(JSON.parse(strData))

// console.log(JSON)





// console.log(localStorage.getItem("email"))



// let personData = {
//     name : "khalid",
//     email : "khalid@gmail.com",
//     phone : 987415,
//     address : "32465456e3rasdfjasdfka;s"
// }


// localStorage.setItem("personData", JSON.stringify(personData))

// let storageData = localStorage.getItem("personData")


// let parseData = JSON.parse(storageData)
// console.log(parseData)


// parseData.name = "Abdullah"

// console.log(parseData)

// console.log(storageData)



function addName() {
    // console.log("mai chl raha hon -->")
let name = document.getElementById("name")
let storageData = localStorage.getItem("userName")
// console.log(storageData)
storageData = JSON.parse(storageData)
let arr  =  []

// console.log(storageData)

if(storageData) {
    arr = storageData
}

    let myName ={
        name : name.value
    }

    console.log(myName.name)
    arr.push(myName)

    localStorage.setItem("userName", JSON.stringify(arr))
}

