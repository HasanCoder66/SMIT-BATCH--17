console.log("hello world!");
export {};
// let a = 1
// Multi Pardigms  ==>
// Procedural Programming 
// Object Oriented Programming    
// Functional Programming
// class User {
//   private  email  = "codermhasan@gmail.com"
//     password = "34567uhgvbjk"
// }
// class Admin extends User {
// email = "sufiyan@gmail.com"
// }
// let a1 = new Admin()
// console.log(a1)
// abstract class CookingEssentials {
// }
// class Cook {
//     constructor(){}
// }
// Revision 
// Tuples
// Type annotation
// Generics
// Interfaces
// Classes
// Functions
// tuple mai kiya tm bataty ho ke mery array ke index fulaana fulanaa pr is type ka data hogaa
// let array:[number, string, number] = [0,"1",2]
// let numArr:string[] = ["one","two"]
// Type annotation ==> type annotation mai tmhy variable kis type ka hai batana parta hai
// let a:boolean = true
// Functions ===> 
// const arrowFn = (val:string, cb:(v:string) => void) => {
//     // Function body ==>
//     // callback fn call  ==>
// cb(val)
// }
// arrowFn("Hello!", (v:string) => {
//     console.log(v,"Hasan")
// })
// Generics ===>
// 1. Generic Interface
// 2. Generic Functions
// 3. Generic Classes
// aisy fns , aisy interfaces or aisy classes ki data type ko dynamic mangage kerta ho.
// argument ki data type ko dynamicly manage kerliya kis ki help generic function ki help sai
// function foo <T> (name:T):T{
//     return name
// if(typeof name == "string"){
//     name.
// }
// if(typeof name == "number"){
//     name.
// }
// }
// foo("hasan")
// foo(12)
// Interface ==> 
// interface ka use hum tab kerty hain jab hamy object ki shakal defined kerni ho 
// const user = {
//     email : "codermhasan@gmail.com",
//     userId : 567865434567
// }
// interface User <T> {
//     email : string
//     userId : T
// }
// function random(u:User<number>){
// }
// random({
//     email : "codermhasan@gmail.com",
//     userId : 567865434567
// })
// Generic Classes ===> 
// class User <T>{
//     constructor(public name:string, public age:T){}
// }
// let u1 = new User ("Hasan", 22)
