console.log("Global execution start -->") 

let globalVar = "har jaga access hota hai";


var fnGlobal = function (){
    console.log("mai global fn mai hon....")
}

fnGlobal()

console.log(globalVar)

console.log("Global execution end-->")