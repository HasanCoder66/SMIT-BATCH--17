// console.log("javascript running -->");

// function outer() {
//   let userName = "Hasan";
//   function inner() {
//     console.log("userName ==>", userName);
//   }

//   return inner;
// }

// let result = outer()

// result()

// Currying in Javascript ==>

// function abc(a, b, c) {
//   return a + b + c;
// }

// console.log(abc(1,2,3))

// let foo;
// let b
// let c

// function normal (a){
//     return function (b){
//         return function (c){
//             console.log(a+b+c)
//         }
//     }
// }

// const normal = (a) => (b) => (c) => a + b + c

// normal(2)(2)(2)

// let firstFn = normal(2)  /// a

// let secondFn = firstFn(3)  /// b

// secondFn(4)   /// c

// Requirement ==> Arguements nhi hongy function ka output ....

// email send kerai ga  with the help of curry

// to codermhasan@gmail.com
// subject Application For Frontend Developer Position
// Body Assalamualaikum, I'm Hasan Ashraf a skilledfull full stack developer.

// function sendEmail (to){
//     return function (sub){
//         return function (body){
//             console.log(`Sending Email to ${to} with Subject: ${sub} and Body: ${body}`)
//         }
//     }
// }

// const sendEmail = (to) => (sub) => (body) =>
//   `Sending Email to ${to} with Subject: ${sub} and Body: ${body}`;

// // sendEmail("codermhasan@gmail.com")("Application For Frontend Developer Position")("Assalamualaikum, I'm Hasan Ashraf a skilledfull full stack developer.")

// let step1 = sendEmail("codermhasan@gmail.com");
// let step2 = step1("Application For Frontend Developer Position");
// let email = step2(
//   "Assalamualaikum, I'm Hasan Ashraf a skilledfull full stack developer."
// );

// console.log("Email ===>", email);

// Optional Chaining =>        ?
// Errors Free

let userObj = {
  name: "Hasan",
  age: 22,
  email: "codermhasan@gmail.com",
  address: {
    city: "Karachi",
    country: "Pakistan",
    homeAddress: "R-40",
  },
  // getFullName : function (){
  //     return this.name
  // }
};

// console.log(userObj?.getFullName?.()); //undefined()

// let city = "country"
// console.log(userObj?.address?.["city"])

// console.log("userObj ==>", userObj.addresss.street)

// console.log(userObj?.username?.previousUserName)

// if(userObj.name){
//     console.log(userObj.username.name)
// }

// let obj = {
//     name : "Ayaan"
// }



// Ternary Operator ==>

// condition  ? true : false
// let age = 12;
// let drive;

// drive = age > 18 ?  "yes drive" : "No Drive"


// console.log(drive)


// let hungry = true;


// console.log(hungry == true ? "kuch khaloo" : "mai full hon")


// let lottery = Math.round(Math.random() * 9);
// let message;

// message = lottery == 7 ? "congratulations" : "try again"
// console.log(message)



let isAdmin = false;

isAdmin ? window.location.href = "admin.html" : ""



// if (false) {
//   console.log("mai true hon");
// } else {
//   console.log("mai false hon");
// }