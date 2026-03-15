// JavaScript Topics Required Before Learning React

import { abc } from "./index.js";

// 1️⃣ Variables (let, const)
// 2️⃣ Data Types
// 3️⃣ Functions
// 4️⃣ Arrow Functions
// 5️⃣ Array Methods (map, filter, find)
// 6️⃣ Objects
// 7️⃣ Destructuring
// 8️⃣ Spread Operator (...)
// 9️⃣ Rest Operator
// 🔟 Template Literals
// 1️⃣1️⃣ ES Modules (Import / Export)
// 1️⃣2️⃣ Promises .then or .catch
// 1️⃣3️⃣ Async / Await




// 1️⃣ Variables (let, const)

// Containers  ==> data uski value ko store 

// let, const , var 

// let username = "Asad"
// console.log(username)


// const age = 0;



// 2️⃣ Data Types

// Primitives   // string, number, undefined, null, boolean, bigInt, symbol  ==> by value

// Reference ==> by reference brackets ==> (), [], {}

// let user = {
//     name : "hasan",
//     skills : ["HTML","CSS"]
// }




// 3️⃣ Functions

// function sum (n1, n2){
// console.log(this)
// }


// console.log(sum(12, 45))
// console.log(sum(22, 145))
// sum(12, 12)



// 4️⃣ Arrow Functions
// const sum = (n1, n2) => {
//     console.log(this)
//     return n1 + n2
// }

// sum(12, 12)

// console.log(sum(22,22))



// 5️⃣ Array Methods (map, filter, find)


// let arrNum = [12, 22, 44]

//single value 

// let findReturn = arrNum.find((item) => item == 22)
// console.log(findReturn)

//Filterations ===> 

// let filterReturn = arrNum.filter((item) => item >= 21 )
// console.log(filterReturn)


// UI Render Kerna 

// let returnVal = arrNum.map((item) => item)
// console.log(returnVal)




// 6️⃣ Objects

// let user = {
//     username:"hasancoder66",
//     email : "codermhasan@gmail.com",
//     education : [{degree:"Graduation"}, {degree:"Intermediate"}, "Matric"]
// }


// // 7️⃣ Destructuring


// // Object Destructuring
// // console.log(user.email)

// let {email, education} = user
// // console.log(email) 
// // console.log(education) 

// // Array Destructuring

// let [edu1, edu2] = education
// console.log(edu1,edu2) 

// let {degree} = edu1
// console.log(degree)



// let arr = [1,2,3]

// 8️⃣ Spread Operator (...)

// kholny ko 

// let user2 = {
//     ...user
// }
// console.log(user2)


// 9️⃣ Rest Operator

// let [one, ...others] = arr
// console.log(others)



// 🔟 Template Literals

// let userName = "Hasan";

// let fullName = `Muhammad ${userName}`



// 1️⃣1️⃣ ES Modules (Import / Export)
abc()


// 1️⃣2️⃣ Promises .then or .catch

// api url 
// fetch("https://fakestoreapi.com/produ")
// .then((res) => {
// return res.json()
// })
// .then((result) => {
// console.log(result)

// })
// .catch((err) => {
// console.log(err)
// })


// 1️⃣3️⃣ Async / Await


// async function apiCall () {
// try {
//     let apiRes = await fetch("https://fakestoreapi.com/products");
//     let apiResult = await apiRes.json()
//     console.log(apiResult)
// } catch (error) {
//  console.log(error)   
// }
// }

// apiCall()