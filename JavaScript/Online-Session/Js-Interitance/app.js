// // console.log("app js running ==>")

// // Everything object in js

// // let num = 23;

// // Dry Principle

// let user = {
//     fName : "Muhammad",
//     lName : "Hasan",
//     getFullName () {
//         return this.fName
//     }
// }

// let user2 = Object.create(user)

// console.log("User 1",user.fName)
// console.log("User 2",user2)

// // console.log(user2.getFullName())

// let obj1 = {
//   random: 26,
// };

// let obj2 = {
//   __proto__ : obj1
// };


// console.log("Before -->",obj2.random)
// obj2.random = 8976543567890
// console.log("After", obj2.random)


// console.log(obj2)
        //         obj1 --> object --> null
// console.log(obj2.__proto__.__proto__.__proto__)

                     // object - > null 
// console.log(obj1.__proto__.__proto__)




// let one ={
//     fName : "Ayaan",
// }

// let two = {
// __proto__  : one
// }

// let three ={
//     __proto__ : two
// }

// console.log("Before",three.fName)
// three.fName = "Hacked"
// console.log("Before", three.fName)

        // object --> two --> one --> Object --> null
// console.log(three.__proto__.__proto__.__proto__.__proto__)


// let sum = "string"

// let num = 12;

// console.log(sum.at(2))

// Wrapper Classes  String , Number , Boolean

class Student {

}

let str = "string"

let num = 12

