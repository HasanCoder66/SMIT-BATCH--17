console.log("javascript running -->")

// console.log(document.childNodes[1].childNodes[0].nodeType)

// console.log(document.getElementById("heading"))
// console.log(document.getElementsByClassName("heading"))
// console.log(document.getElementsByTagName("h1"))

// console.log(document.querySelector("#heading").getAttribute("class", "name"))
var h1 = document.createElement("h1")
console.log(h1.appendChild(document.createTextNode("my name is hasan!")))
console.log(h1.innerHTML)


// let objName = {
//     propName :{
//         value : "value"
//     },
//     addKerdo : "naye property"
// }

// console.log(objName.propName.value)



// function Ahmed (age){
//     this.age = age
//     this.getFullAge = function (){
//         console.log("Ahmed is",this.age, "Years Old.")
//     }
// }

// // console.log()
// let ahmedAge = new Ahmed(17)
// ahmedAge.getFullAge()


let newArr = new Set([1,2,3,4,5,6,7,7,8])
newArr.clear()
console.log(newArr)


let myMap = new Map()
const prop = function () {
    console.log("ayaan")
}
const obj = {}
myMap.set(undefined, "hasan")
// myMap.set(obj, "ahsan")
// myMap.clear()
console.log(myMap)