// Named Function
import { printUserName } from "./app.js";
import kuchBi from "./app.js";
// function foo (val:number){
// console.log(val)
// }
// foo(12)
// Anonymous Fn
// let anonymousFn = function (){
//     console.log("anonymous fn ==>")
// }
// Arrow Fn
// const kuchBi = (n : number,  cb:(n:number)=> number, str:string = "string",) => {
//     cb(n)   //arg
// }
//             //param
// kuchBi(12, (n:number) => {
//        console.log(n)
//     return n
// })
// Rest Parameters  ---> // bacha howa 1 array mai rakhdeta tha
// spread oprator ---> khol deta tha
// function restFn (...arg:number[]){
// console.log(arg)
// }
// restFn(1,2,3,45,5,6)
// Function Overloading ===>
// function abc ():void{}
// function abc ():void{}
// agar same name ke function hongy to overloading kehla raha hai...
// Without overloading
// function foo (a:string, b:number){
// }
// foo("Uzair", 22)
// Overloading Syntax
// 1. overload signature
// 2. function /// implementation // logic
// overload signature
// function foo (a:string):void
// function foo (a:string, b:number):number
// // function aapky pass 1 hi hoga or logic 1 bi 1 hi hogi
// function foo (val:any, num?:any){
//     // Type Narrowing
//     if(typeof val == "string" && num == undefined){
//         console.log("pehla signature ke liye true hogiyaa")
//     }
//     if(typeof val == "string" && typeof num == "number"){
//      console.log("doosra signature ke liye true hogiyaa")
//     }
// }
// foo("Uzair", 33)
// Generics ===>
// Generic functions
// Generic Classes
// Generic Interfaces
// Definition
// aisy fn, aisi classes, aisy interface jo dynamic data type ke hisaab sai chlayy
// GENERIC FUNCTIONS
// "string"  literalyy type kia hai string
// function abc<T>(val: T): T {
//   // Type narrowing
//   if (typeof val == "string") {
//     return val.toUpperCase() as T; /// type assertion
//   }
//   return val;
// }
// console.log(abc(12))
// abc("12")
// abc(true)
// GENERIC CLASSES
// class Student <T> {
//     public name;
//     constructor(username:T){
//         this.name = username
//     }
// }
// let s1 = new Student("Saad")
// console.log(s1)
// GENERIC INTERFACES
// interface User <T> {
//   email: string;
//   password: string;
//   userId: T;
// }
// function userKa(u: User<number>) {}
// userKa({ email: "codermhasan@gmail.com", password: "string", userId: 4567890 });
// printUserName("Saad Mirza")
// kuchBi("Saad Raza")
// apko typescript sai ziada pata hai variable ki type ka baary mai 
// Type Assertion ==>
// let a :any = 12;
// (a as string)
// (<number> a)
// Type Casting ===>
// 1 data type ko doosri data type mai convert kerlo 
// let num:number = 22;
// console.log(String(num))
// console.log(typeof String(num))
// NON NULL ASSERTION OPERATOR ==>
// !
// let value:null | undefined | string;
// value!. 
// value = "Hasan"
// class Car {
//     switchOn (){
//         console.log("start car ==>")
//     }
// }
// class Bike {
//     switchOn (){
//         console.log("start Bike ==>")
//     }
// }
// let c1 = new Car()
// let b1 = new Bike()
// console.log(c1)
// console.log(b1)
// instanceof    ==> typeof 
// function switchOnKero (obj: Car | Bike){
//     // console.log(obj)
//     if(obj instanceof Car){
//         c1.switchOn()
//     }
//     if(obj instanceof Bike){
//         b1.switchOn()
//     }
// }
// switchOnKero(b1)
