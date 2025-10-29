// console.log("Hello World!")


// Extra Task --> 

// function doNumLe (num1, num2) {
// // console.log(num1, num2) 
// if(num1 == num2){
//     return console.log("both values are equal")
// }
// if(num1 < num2){
//     console.log(num1 , " is greater than" , num2)
// }else {
//     console.log(num2, " is greater than" , num1)
// }
// }


// doNumLe(12, 12)



// Problem # 1 

// let firstName = "Muhammad"
// let lastName = "Hasan"

// let address = "main street"

// // reassign ==>

// address = "fulan dhimkhana == >"

// console.log("first name ==> ", firstName)
// console.log("last name ==> ", lastName)
// console.log("address ==> ", address)




// Problem # 2

// let street = "2nd street Gulshan"
// let country = "Pakistan"


// let fullMailingAdd = street + " " + country

// console.log("full mailing address ==>",fullMailingAdd)



// Problem # 3

// let score1 = 33
// let score2 = 33
// let score3 = 33

// let totalScore  = score1 + score2 + score3

// console.log(totalScore);


// let plates = 20;
// let people = 7;

// let remainingPlates = plates - people


// let message = `There are ${remainingPlates} plates available`





// Problem # 4

// let fruits = ["apple", "banana", "mango", "orange", 125]
// let firstFruit = fruits[0]

// fruits[fruits.length -1] = "grapes"

// console.log("Actual Fruits Array --->",fruits)
// console.log("First Fruit Variable --->",firstFruit)



// Problem # 5
// function calculateTotal (subTotal, tax) {
//     return subTotal + tax
// }

// let order1= calculateTotal(25, 25);
// let order2=calculateTotal(125, 25);
// let order3= calculateTotal(255, 25);


// console.log("Order 1-->",order1)
// console.log("Order 2-->",order2)
// console.log("Order 3-->",order3)


// Problem # 6

let car = {
    make :"Audi",
    model :1574,
    year : 2025,
    colors : ["red", "green","black","white"],
    hybrid : true,
    drive : function () {
        console.log("Car behtreeen tareeky sai chl rhai hai")
    },
    stop : function () {
        console.log("Car ko rok diya hai meny")
    }
}

console.log("Make -->", car.make)
console.log("Car First Color -->", car.colors[0])
car.drive()
car.stop()