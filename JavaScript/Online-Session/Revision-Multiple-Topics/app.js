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

// * API

// Fetch ==>

// ES6
// let apiRes = fetch("https://fakestoreapi.com/products")
//   .then((result) => {
//     return result.json();
//   })
//   .then((result) => {
//     console.log(result);

//     // document.body.innerHTML = `<h1> update </h1>`
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(apiRes);
// apiRes.then((res) => console.log(res))
// .then((result) => console.log(result));

// apiRes.then((res) => res.json()).then((result) => console.log(result))

// ES7 2022 Async await

const apiCall = async () => {
  try {
    let apiRes = await fetch("https://fakestoreapi.com/products");

    let result = await apiRes.json();

    let [arr1, arr2, ...others] = result;
    console.log(others);

    let [other1] = others;
    //    other1.title = "Womens"

    console.log(other1);
    console.log(result);

    //    console.log(arr1)
    //    console.log(arr2)
    // throw "kuch bi"
  } catch (error) {
    console.log(error);
  }
};

// apiCall()

// * Destructuring, Rest & Spread Operators

// let array = [1,2,3,4,5,6,7,8]

// let [one, two, three, ...others] = array
// console.log(others)

let object = {
  name: "Hasan",
  age: 22,
  skills: ["HTML", "CSS", "Javascript"],
  address: {
    city: "Karachi",
  },
  userName: "hasancoder66",
  email: "codermhasan@gmail.com",
};

// let {name, skills, age, ...others} = object

// console.log(others)

// Spread Operator || Rest Operator ==> ... pehchan ==> rest wala = sai pehly ata hai spread wala = ke baad ataa

// spread operator khol deta tha

// console.log(name, skills, age)

// console.log(one, two, three)

// let newObj = {
//     ...object,
//     name : "Ayaan"
// }

// let deepCopy = Object.assign(object)
// console.log(deepCopy)

// let deepCopy = JSON.parse(JSON.stringify(object));

// deepCopy.name = "Ayaan"

// console.log(deepCopy)
// console.log(object)

// console.log(newObj)

// Dry Principle ==> Do Not Repeat Yourself

// Call, Bind, Apply   ==> use case this reference parent

function getFullName (){
    console.log(this.fullName)
}
let nameObj = {
  fullName: "ayaan faheem",
};

let anotherObj = {
  fullName: "Uzair Hashmi",

};

let thirdObj = {
    fullName : "Rehan"
}

// getFullName.call(anotherObj)
// getFullName.apply(anotherObj, ["Karachi", "Delhi"])

// getFullName.call(thirdObj)
// getFullName.apply(thirdObj,["karachi", "isalamabad"])

// let returnFn = getFullName.bind(anotherObj)

// returnFn()



// * Map or Set

// Set VS Array

    // Constructor always return a new Object

    let staff = ["Trainer", "Student", "Teacher", "Manager", "Teacher", "Manager", "HR"]
    

    let myArr = new Set(staff)

    
    // let myArr = [...new Set(staff)]

    
    // console.log(myArr.add("Reciptionist"))
    // console.log(myArr.has("HR"))


    // new Map()

    // Map vs Object 
    let objectnum = {
        
    }

    let newObj = new Map()

    console.log(newObj.set(1, 1))
    // console.log(newObj.set(true, false))
    // console.log(newObj.set(null, false))
    // console.log(newObj.set(undefined, false))
    // console.log(newObj.set({}, false))
    // console.log(newObj.set([], false))
    // console.log(newObj.set(() => {}, false))
    // console.log(newObj.set({}, false))

    // console.log(newObj.set( false))


    // console.log(newObj.size)
    // console.log(newObj.__proto__)




    class Storage {
        constructor (age, ){
            this.age = age
        }
    }

    


    let myClass = new Storage (22)
    console.log(myClass)





