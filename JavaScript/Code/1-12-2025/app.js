// console.log("js running 000>")


// let userData = {
//     name : "hasan",
//     fathersname : "ashraf",
//     quailfication : "inter",
//     skills :    ["full Stack Development", "Cloud "]

// }


// // console.log(localStorage.setItem("usersData",userData))
// console.log(localStorage.setItem("userData",JSON.stringify(userData)))

// console.log(JSON.parse(localStorage.getItem("userData")))


// function xyz () {
//     return JSON.parse(localStorage.getItem("userData"))
// }


// console.log(xyz().name)





// let localStorage = {
// "user" : "{name : hasan}"
// }


// localStorage.setItem("user",user)


// let obj = {
//     name : "hasan"
// }

// console.log(obj.name)

// localStorage.getItem("userData")



// function highOrder (cb){

//     const fullName = "hasan"
// cb(fullName)
// }

// highOrder(function (name) {
//     console.log(`my name is ${name}`)
// })

// function order (cb) {
// console.log(cb(2))
// }
// order(printKero)

// function printKero (n) {
//     console.log(n)
// }




let array = ["ayan", "faheem", "saleem", "0"]
let num  =  [1,2,3,4,5,6,7]

// console.log(array.find((val) => val  == "saleem" ))
// console.log(num.find((val) => val > 1 ))
// console.log(num.filter((val) => val % 2 == 0 ))
// let arr = []
// array.forEach((val) => arr.push(val + 12))

// console.log(arr)
// console.log(array.forEach(function (val) {
//     console.log(val)
// }))

// let returnVal = array.map((val) => val + "Ashraf" )
// console.log(returnVal)

// function customForEach () {
//     for(let i = 0; i < array.length; i++) {
//         console.log(array[i])
//     }
// }

// customForEach(function (val) {
//     console.log(val)
// })


console.log(num.reduce((accumulator,val) =>{
return accumulator + va
}))


const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0); // sum = 15

console.log(sum)

