console.log("javascript running -->")


// what is higher order function 

// function highOrder (cb) {

//     let result = "Muhammad " + "Hasan"
//     cb(result)
// }

// function myPrint (name) {
//     console.log(name)
// }

// highOrder(myPrint)







// let numbers =  [1,4]

let stuNames = ["daniyal", "" , "ahsan"]

// console.log(stuNames.find((v) => v == "hasan"))

// numbers.forEach(function (val) {
// console.log(val)
// })
// numbers.forEach(myPrint)
// console.log(numbers.forEach((val) => console.log(val)))
// let returnVal = numbers.forEach((val) => console.log(val))
// console.log(returnVal)

// forEach , map, filter, find, findIndex, reduce , 

// function myPrint (value) {
//     console.log(value)
// }

// let mapReturn = numbers.map((val) => val * 2)

// console.log(mapReturn)


// console.log(numbers)

// console.log(numbers.findIndex((v) => v == 4))
// console.log(numbers.filter((v) => v > 2))
// console.log(numbers.reduce((accum,val) =>  accum))

// let arr = []
// numbers.forEach((v) => arr.push(v))

// console.log(arr)






function sayHello () {
   console.log("hello")
}

function sayBye () {
    console.log("bye")
}





// what is events in javascript ? 


let btn = document.getElementsByTagName("h1")[0]
// btn.addEventListener("click", () => {
//     console.log("click chl raha hon")
// })

const clickFn = () => {
    console.log("click chl raha hon")
}
// btn.addEventListener("click",clickFn )
// btn.addEventListener("click",function () {
//     console.log("mai chl raha hon")
// } )

btn.addEventListener("click", sayHello)
btn.addEventListener("click", sayBye)

// btn.onclick = sayHello



// btn.onclick = sayBye
