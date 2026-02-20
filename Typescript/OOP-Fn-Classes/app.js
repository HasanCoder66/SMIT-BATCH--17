// let user = {
//     email : "saad@gmail.com",
//     password : "kuchbi",
//     username : "kuchbi"
// }
// interface User {
//     email : string,
//     password : string,
//     username : string
// }
// function kuchBi (u:User){
// console.log(u)
// } 
// kuchBi()
// function kuchbi (val:string){
//     console.log("ye mera console hai -->")
// }
// kuchbi()
// let abc:number = "12"
// tsc --watch 
// Other Outputs true sai false kerdena neechy di gaye properties ko
// "sourceMap": false,
// "declaration": false,
// "declarationMap": false,
class Bottle {
    name;
    constructor(name) {
        this.name = name;
    }
}
export {};
// let b1 = new Bottle("Aquafina")
// console.log("Before Update bottle",b1)
// // console.log(b1.value)
// b1.brandName = "Nestle"
// console.log("After Update bottle",b1)
// static members 
// direct kis sai hongy class name 
// class Student {
//    static name = "Sufiyan"
//    static getRandomNumber (){
//     return Math.floor(Math.random() * 10)
//    }
// }
// let s1 = new Student()
// console.log(s1)
// console.log(Student.getRandomNumber())
// Abstract Classes 
// abstract class Student {
//     name = "Hasan"
//     getDetail(){
//         return this.name
//     }
// }
// let s1 = new Student()
//   abstract class cookingEssientials {
//         constructor(public kiaBanaRahayHo: string, public kiaLpgUseKerRahy:boolean){}
//     }
//     class cake extends cookingEssientials{
//         constructor(name:string, gasName:boolean){
//             super(name, gasName)
//         }
//     }
//     let cookingCake = new cake("Fruit Cake", true)
//     console.log(cookingCake)
// Functions
// Named Function 
// function abc ():void{}
// let anonymous = function ():string{return ""}
// let arrowFnOneliner = ():number => 12
// let fullySyntaxArrowFn = ():void => {}
// function abc(name:string, cb:(val:number) => void){
//     cb(123)
// }
// abc("hasan", (val:number)=>{console.log(val)})
// function foo (a:string, b?:number){
// }
// foo("hasan",12)
// foo("hasan")
// function kuchBi (...arg:number[]){
//     console.log(arg)
// }
// kuchBi(1,2,3,5,8,89,9)
// let arr = [1,2,4] 
// let arr2 = [...arr]
// console.log(arr2)
// // console.log(one)
// // console.log(others)
// function defaulParam (name:string, age:number = 22){
// }
// defaulParam("hasan")
