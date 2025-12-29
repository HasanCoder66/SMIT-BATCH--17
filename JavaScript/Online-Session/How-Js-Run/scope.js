// "use strict"
// console.log(this)
// console.log("js running -->")



// console.log(n1)

const n1 = 1
let n2 = 2
var b =3


// console.log(n1)



function sum (){
   var a = 1;

//    function inner(){
//     console.log(a)
//    }

//    inner()
}

sum()


// console.log(a)



// block scope
// {
//    var abc = "abc" 
// }

if(true){
    var xyz = "zyz"
}
console.log(xyz)


// console.log(abc)


function foo (){


}




function first (){
    // console.log(n1)
    if(true){
        var myName = "hasan"
    }
    // console.log(myName)

    function second(){
        let myUserName = "hasancoder66"
        
        function third(){
            let d = "Hey"
            console.log("My name is "+ myName + " My User name is" + myUserName)

            console.log(d + n1 + z + a)
        }

        third()
    }


    second()
}

first()