// let num:string = "12"

// let array = [1,2,34,56]



// Typescript = Javascript  +  more feature




// Typescript 

// Data Type 


// Primitives  By Value ==> Number, String, Boolean, Null, undefined
// Reference  By Reference ==> [], {}, ()




// let a = "abc"
// a = 12

// let num = 12



// let value :number = 34







// Tuples

// let arr:number[] = [1,2,3,4]

// let arr : [number, string, null] = [ 1, "str", null ]

// arr.push(undefined)

// Enums     ==>    Enumerations

// enum UserRoles {
// student = "Student",
// recruiter = "Recruiter",
// admin = "Admin"
// }




// UserRoles.admin


// enum StatusMessages {
//     succes = "Successfully Retrieve",
//     error = "URL is Invalid",
// }

// enum StatusCode {
//     notFound = 404,
//     succes = 200,
//     badRequest = 500
// }


// StatusMessages.succes


// Any Or Unknown

// let abc:unknown;

// abc = "xyz"


// // abc = 12

// if(typeof abc === "string"){

// }

// else if (typeof abc === "number"){
//     abc
// }


// Void


// function foo (a:number, b:number):boolean {
// console.log("kuch bi")

// return false
// }

// foo(1,2)


// Null, Undefined, Never

// let admin:null = null;


// let user: null | boolean = null

// user = true

// let user:undefined | boolean = undefined



// Never 

// function foooo ():never{
// while (true){}
// }

// foooo()

// console.log("hi ==>")


// Inference 

// let sum = 23;

// let sum:string = "23"


// Interface & Type Aliases

// interface User {

// }

// interface Car {
//     name : string,
//     width : number,
//     color : string
// }

// let carObj = {
//     name : "Honda Civic",
//     width : 1000,
//     color : "Black"
// }

// function kucBi (carObj:Car) {
// // console.log(a +" " + b)
// // obj




// }



// kucBi(carObj)




// function random(a:number, b : number){

// }




// random(12, 12)




// car == > black

// interface User {
//     email : string,
//     password : string,
//     age : number,
//     phone : number
// }


// let user = {
// email : "codermhasan@gmail.com",
// phone : 9231702456,
// age : 22,
// password : "asdlfkajsdlf"
// }


// interface myUser {
//     name : string,
//     email : string
// }

// function UserFn (user:myUser){
//     // user
// }

// user 

// UserFn({name : "Hasan",email : "codermhasan@gmail.com" })




// interface user {
//     email : string,
//     age : number
// }

// interface admin extends user {
// superAdmin : boolean
// }


// function argu (obj: admin){
// // obj.
// }


// argu({email:"codermhasan@gmail.com", age : 22, superAdmin : true})


interface bottle {
    brandName : string
}

interface bottle {
    ml : number
}

function bottleFn (btl: bottle){
console.log(btl)
}

bottleFn()


