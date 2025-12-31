// "use strict"

// console.log("javascript is running -->")

// arrowFn()

// console.log(b);

// block scope
let a = "a";

// global scope
var b = "b";

// console.log(this.b)
// block scope

// if , for, switch do

//  {
//     console.log(d)
//     var d = "d"
//  }

//  let obj = {
//     d : "d", xyz : function (){
//         console.log(this.d)
//     }
//  }

//  console.log(obj)

function foo() {
  console.log(this);
}

let btn = document.getElementById("btn")
btn.addEventListener("click", foo)
// Function expression
// var fn = function (){
// console.log(this)
// }

function normalwalaFn (){


let arrowFn = () => {
  // console.log("my name is hasan")
  console.log(this)
};


arrowFn()
}





normalwalaFn();

if (true) {
  let abc = "ABC";

  // console.log(x)
}

// function foo (){
//     console.log(this)
// }

// foo()

let myObj = {
  name: "Hasan",
  lastName: "Ashraf",
  b : "B",
  getFullName: function () {
    console.log(this);
  }
// getFullName : () => {
// console.log(this.b)
// }
};


myObj.getFullName()







let newObj = {
    year : 2003,
    calcAge : function (){
        return 2025 - this.year
    }
}


let matilda = {
    year : 2017
}

// matilda.calcAge = newObj.calcAge
// console.log("Matilda --->",matilda)

// console.log(matilda.calcAge())


let c = newObj.calcAge()
// console.log(c)

console.log(c)