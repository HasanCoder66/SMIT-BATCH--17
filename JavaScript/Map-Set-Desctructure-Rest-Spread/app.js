console.log("js running -->")


// let obj = {
//     name : "hamza",
//     age : 18,
// }

// let newObj = {
//     name :"huzaifa",
//     age : 20
// }



// function Student (name, age, skill) {
//     this.studentName = name,
//     this.studentAge = age,
//     this.studentSkill = skill
    
// }

// Student.prototype.calcAge = function (bOfYear) {
//     let currentDate = new Date().getFullYear() - bOfYear

//     console.log("Birth of Year -->",currentDate)
// }

// // console.log(new Student())

// let student1SMIT = new Student("Abdul Rafay" , 20, ["HTML", "CSS", "JavaScript"])
// let student2SMIT = new Student("Ayaan" , 18, ["HTML", "CSS", "JavaScript"])

// // console.log("calcAge" in student1SMIT  )
// console.log(student1SMIT.hasOwnProperty("calcAge"))
// console.log(student2SMIT.calcAge(2003))


// Object 


// let newObj = {
//     age : 12,
//     name : "kuch bi"
// }
// console.log(Object.keys(newObj))
// console.log(Object.values(newObj))
// console.log(Object.entries(newObj))
// console.log(Object.freeze(newObj))
// console.log(Object.seal(newObj))

// newObj.name = "Ahad"

// console.log(newObj)

// let newArr = [1,2,3,4,5,6,6,6]
// let myArr = new Set(newArr)

// myArr.add("hasan")
// myArr.add(7)

// myArr.delete("hasan")
// myArr.clear()
// console.log(myArr.has("hasan"))


// console.log(myArr)


// let myMap = new Map()

// console.log(myMap.set({}, "object"))


// Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);


// let fruits = new Map()
//   fruits.set("apples" , 600)

//   fruits.set({}, "function")
//   fruits.clear()
//   console.log(fruits.delete({}))
  // console.log(fruits.get("apples"))
  // console.log(fruits)









  // Local Storage -->  setItem, getItem

  // How to Convert Object to JSON Stringify --> JSON.stringify()
  // How to Convert JSON Object to Js Object --> JSON.parse()
  
  
  
  // Constructor Funtions --> constructor methods,
  // Example Object --> Vanilla Js
  let obj = {
  name :"hasan",
  lastName :"ashraf",
  userName :"hasancoder66"
  }
  
  let obj2 = {
  name :"hasan",
  lastName :"ashraf",
  userName :"hasancoder66"
  }
  
  function Student (name, lastName, userName) {
  this.name = name,
  this.lastName = lastName,
  this.userName = userName
  
  //Constructor for methods
  // this.getFullName = function () {
  // console.log("Muhammad Hasan")
  // }
  }
  
  //kia return mila --> new object
  let student1 = new Student("Ayaan" , "Faheem" , "ayanwebdeveloper")
  let student2 = new Student("Saad" , "Mirza" , "saadmirza729")
  // console.log(student1.getFullName())
  
  // How to Store Function in a Constructor Protorype.
  
  Student.prototype.getFullName = function () {
  console.log(this.name, this.lastName, this.userName)
  }




 student2.getFullName()



// console.log(student1)
// Objects Methods --> keys, values, hasOwn, seal, freeze, entries.

// console.log(Object.keys(student1))
// with map 
// console.log(Object.values(student1).map((val) => val + "66"))

// console.log(Object.values(student1))
// console.log(Object.entries(student1))
// console.log(Object.seal(obj))
// console.log(Object.freeze(obj))

// obj.name = "Abdul"
// console.log(obj.hasOwnProperty("name1"))
// 
// console.log(obj)




// Map or Set 

