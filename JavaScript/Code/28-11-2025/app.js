// console.log("js running -->")

// normal function -->
// function userName () {
//     console.log("hasanashraf")
// }

// let obj = {
//     userName : function () {  //anonymous function
//         console.log("hasan")
//     }
// }

// obj.userName()



// function expression 
// var userName = function () {
// console.log("hasan")
// }

// console.log(userName())


// arrow function ==> 

// const userName = () => {
//     console.log("my name is hasan")
// }

// one liner  agar hai kia function ki body 
// const userName = () => "console.log(my name is hasan"


// let returnVal = userName()

// console.log(returnVal)


// let obj = {
//     getFullName : () => "mera full name le aou"
    
// }

// console.log(obj.getFullName())




// high order function kia hoty hain kesy hotain kab use hoty hain

// esy function jo apny arguement mai 1 function accept kery 

// const display = () => {
//     console.log("hasan")
// }


// const highOrder = (fn) => {
//  fn()
// }


// highOrder(display)



let arr = ["ayan", "hasan", "saad"]

console.log(arr.map(function (val) {
    return val + "66"
    }))