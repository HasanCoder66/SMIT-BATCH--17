// console.log("js running ==>")

// * Array Basic & Higher Order Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(arr)

// shift, unshift, pop, push, slice, splice

// console.log(arr.splice(0,4, "sufiyan", "uzair", "ali") )

// console.log(arr)

// const myName = (val) =>  val

// // higher order method
// const display = (cb) => {
// return cb("Ayaan Faheem")
// }

// console.log(display(myName))

// Array Advance Higher Order Methods
// map, forEach, find, filter, reduce, findIndex, findLastIndex

// let returnValue = arr.find((item) => item >= 4)

// console.log(returnValue)

// * Prototype Based Inheritance

// In JavaScript Everything is Object

// let obj = {
//     name : "AYAAAN",
//     lname : "faheem"
// }

// console.log(obj.name.toLowerCase())
// console.log(obj.name.at(2))

// obj {}  => __proto__ point --> object --> __proto__ --> point --> null

// console.log(obj.__proto__.__proto__)

// let user1 ={
//     userName : "hasancoder66"
// }

// let obj = {
//     __proto__ : user1
// }

// console.log(obj.userName)

// console.log(obj.__proto__.__proto__.__proto__)

// let str = "string";

// console.log()

// let num = 34;
// console.log(num.__proto__)

// let boo = true
// console.log(boo.__proto__)

// sabh sai pehly kahan dhoondy ga tmhary current obj ==>  agar wahan milgaya to ok mil gaye property

// agar wahan nahi mila to kha jayega ga __proto__

// let user3 = {
//     name : "hasan",
//     // age : 34
// }

// console.log(user3)

// console.log("toString" in user3)

// * Closures & Currying

// function bundles

// function ke ander fn Closures hai..

// function outerFn(val) {
//   let age = val;

//   //

//   function innerFn() {
//       return age
//   }

//   return innerFn

// }

//  console.log(outerFn(22));

// Send Email

// to -->    step 1
// sub -->   step 2
// body -->  step 3

// function sendEmail(to) {
//   return function (sub) {
//     return function (body) {
//       console.log(
//         `Sending Email to: ${to} with Subject: ${sub} and Body: ${body}`,
//       );
//     };
//   };
// }

// console.log()

// let step1 = sendEmail("codermhasan@gmail.com")("")

// console.log(step1())

// console.log(
//   sendEmail("codermhasan@gmail.com")("Application For Frontend Developer")
// );

//  sendEmail("codermhasan@gmail.com")("Application For Frontend Developer")("I'm Muhammad Hasan Ashraf skilled in full stack development..")

// let step1 = sendEmail("codermhasan@gmail.com")
// let step2 = step1("Application For Frontend Developer Role")

// step2("Hey! I'm a Hasan!")

// * Local Storage

// let users = [
//   {
//     name: "hasan",
//     password: 567890456,
//     email: "codermhasan@gmail.com",
//   },
//   { name: "ayan", password: 567890456, email: "ayan@gmail.com" },
//   {
//     name: "uzair",
//     password: 567890456,
//     email: "uzair@gmail.com",
//   },
// ];

// localStorage.setItem("user", JSON.stringify(users));
