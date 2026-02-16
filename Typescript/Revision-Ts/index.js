// javascript ka all valid code typescipt mai valid code hai
// let user = {
//     email : "codermhasan@gmail.com",
//     phoneNum : 4567890,
//     userName : "hasanCoder66"
// }
// type 
// type bottle = string | null
// type userName = string | undefined
// let userName: userName = ""
// function a (a:obj){
//     a.
// }
// let value: string | number | null
// value  = ""
// value  = null
// value  = 12
// value = true
// function foo (a:string | number | null){
// }
// foo(12)
// interface Admin extends User {
// isAdmin : boolean
// }
// function foo (u:Admin){
// }
// foo(user)
// &
// type user = {
//     email : string,
//     password : string
// }
// type Admin = user & {
//     isAdmin : boolean,
//     random : string
// }
// function foo (u:Admin){
// // u.random = "string"
// }
// CLASS  ---> -> CONSTRUCTOR -> PRODUCT    
// // COMPANY --> MACHINES --> FINAL PRODUCT
// class Device {
//     constructor( public divice : string, public color : string){}
// }
// let d1 = new Device("Iphone", "Black")
// let d2 = new Device("Samsung", "gray")
// let d3 = new Device("Techno", "green")
// class Student {
//     constructor (public name :string, public lName:string, protected email:string){ }
// }
// class StudentMaker extends Student {
//     constructor(public name :string, public lName:string, protected readonly email:string, public rollNum?: number){
//     super(name,lName,email)
// }
//  changeVal (){
//         this.email = "shakkor@gmail.com"
//     }
// }
// let s1 = new StudentMaker("Ayaan", "Faheem" , "ayan@gmail.com")
// s1.email 
// s1.email = "hack@gmail.com"
// let s2 = new Student("Ayaan ", "Hashmi" , "ayanhashmi@gmail.com")
// class BottleMaker {
//     constructor (public readonly material:string, public readonly size:number,public readonly bName:string){
//     }
// }
// let b1 = new BottleMaker("Metal", 456, "Pakola")
