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

// interface bottle {
//     brandName : string
// }

// interface bottle {
//     ml : number
// }

// function bottleFn (btl: bottle){
// console.log(btl)
// }

// bottleFn()

// let array:[string, string, boolean] = ["Ayaan","hasan",true];

// Enumerations ==>

// enum StatusCode {
//     NotFound = 404,
//     Success = 200
// }

// enum UserRoles {
//     ADMIN = "ADMIN",
//     RECRUITER = "RECRUITER"
// }

// UserRoles.ADMIN

// console.log(StatusCode.NotFound)

// let a;

// a = "Ayaan"
// a = 12

// a = true

// a.

// let a:unknown;

// a = "hasan"
// a =12;
// a = true;

// if(typeof a == "string"){
//     a.
// }else if(typeof a == "number"){
//     a.
// }

// let abc:undefined = undefined

// function kuchBi ():void{
// return "string"
// }

// let num = 12

// let number = ""

// Interfaces & Type Aliases

// interface User {
//     email : string,
//     phone: number,
//     userName : string
// }

// object

let userObj = {
  email: "codermhasan@gmail.com",
  phone: 34567890,
  userName: "hasancoder66",
};

// interface Admin extends User {

// }

// function foo(u:Admin){

// }

// foo(userObj)

// type str = string

// type num = number

// type bool = boolean

// type allType = str | num | bool

// type val = string | number | null | boolean

// let a : val = true

// a = "uzair"
// a = 456789
// a = null

type shakoor = string;

// function foo ():shakoor{
//     return ""
// }

// type User = shakoor & {
//     getData():void
// }

// interface abcd {
//     email : string
// }

// interface abcd {
//     password : string
// }

// type abcd = String

// type abcd = number

// Classes & Objects ===>

type val = string;

// class Student {
//    public name
//    public email
//    public dob

//     constructor(name:val, email:val, dob:val){
//         this.name = name
//         this.email = email
//         this.dob = dob
//     }

// }

// let s1 = new Student("uzair", "uzair@gmail.com","12-12-2002")
// let s2 = new Student("Ayaan Hashmi", "ayaanhashmi@gmail.com", "12345678")

//  name = "Uzair"
// email = "uzair@gmail.com"
// dob = "12-12-2002"
// console.log(s1)

// multiple machines
// Class --->    constructor
// Company --->  Machine --->  Bananaaa   --> final product dena

// final product jo mujhy mil kia wo machine nhi  product hai

// class Bottle {
// //   private name;
// // protected color
//   constructor(
//     public brand: string,
//     public material: string,
//      protected color: string,
//   ) {
//     // this.name = name;
//   }
// }

// class PlasticBottleMaker extends Bottle {

//   constructor(
//     public brand: string,
//     public material: string,
//     public color: string, ) {
//         super(brand, material, color)
//         this.changeColor()
//   }

//   changeColor (){
//     this.color = "Yellow"
//   }

// }

// let b1 = new PlasticBottleMaker("Aquafina", "Plastic", "white");

// b1.name = "sufiyan"
// b1.name = "Ayaan"
// let b2 = new bottle("Paakola", "Plastic","gray")

// class User {
//     constructor (public readonly username :string){}
// }

// let u1 = new User("Hasan")

// u1.username = "Changes"

let obj = {
  email: "codermhasan@gmail.com",
  userName: "hasanCoder66",
};

interface User {
  email: string;
  userName: string;
  male?: string;
}

function userHai(obj: User, email : string = "codermhasan@gmail.com") {
    // console.log(obj)

    // console.log(obj.male ? undefined : "kuch bi nhi diya")
   
}

// userHai(obj);
