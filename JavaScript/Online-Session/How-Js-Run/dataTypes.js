// console.log("js running --> ")

// Primitives

let a = "b";

let num = 22;

let myBoolean = true;

let isAdmin = null;

// if(true){
//     isAdmin = true;
// }

// let objLiteral = []

// console.log(typeof objLiteral)

// Primitive data type by values hoti

// let n = 12;
// let b = n;

// n = 23;

// console.log(n)
// console.log(b)

// let n1 = 23;
// let n2 = n1;

// n1 = 25

// console.log(n1)   /// 25
// console.log(n2)  /// 23

// Refrence Data Type

// const jonas = {
//     name : "fulaana",
//     age : 22,
// }

// const friend = jonas
// const friendTwo = jonas

// jonas.name  = "dhimkhana"
// console.log(jonas)
// console.log(friend)
// console.log(friendTwo)

let obj = {
  name: "hasan",
  age: 22,
  skills: [{ html: "HTML" }, { css: "CSS" }, { js: "Javascript" }],
};

let shallowCopy = {
  ...obj,
  name: "Changed",
};


console.log(shallowCopy);

// Shallow copy == >  shallow copy 2 tareeky sai hoti hai
// Object.assign
// Spread Operator  ==> seprate kerdeta ya phir khol ker rakh deta tha

// obj.name = "Ayaaan"
// obj.age = 12
// // let shallowCopy = Object.assign({desc : "lorem ipsume dolore;"}, obj)

// let shallowCopy = {
// ...obj,
// desc : "mera name ayaan hai"
// }

// console.log("Obj -->",obj)   // Ayaaan
// console.log("Shallow -->",shallowCopy)  // Ayaaan

// create a new refrence using json parse or json stringify
// let deepCopy = JSON.parse(JSON.stringify(obj))

// obj.age = 122;

// console.log("Old Object ==> ",obj.age)   // 122
// console.log("Deep Copy ==> ",deepCopy.age)  // 22

// Deep Copy ==>
// JSON.parse
// JSON.stringify

let deepCopy = JSON.parse(JSON.stringify(obj));

obj.name = "Ayaaan Hashmi";

console.log(obj.name); /// Ayaan Hashmi
console.log(deepCopy.name); /// Hasan
