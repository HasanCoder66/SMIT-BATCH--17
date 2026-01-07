// console.log("Javascript working -->")

function outerFn() {
  let myName = "Hasan";

  function innerFn() {
    console.log(`my name is ${myName}`);
  }

  return innerFn;
}

// let returnFn = outerFn()

// returnFn()

// let arr = [1,2,3,4,6,7,]

// arr.forEach((item) => console.log(item))

// let filteredItem = arr.filter((item) =>  item > 3).forEach((item) => console.log(item))
// console.log(filteredItem)

// function makeAdder (num){
//     return function (a){
// console.log(num + a)
//     }
// }

// let addTo3 = makeAdder(2)
// let addTo5 = makeAdder(2)

// // addTo5(5)
// addTo3(3)

let btn = document.getElementsByTagName("button")[0];
let heading = document.getElementById("heading");

// console.log(btn)
// console.log(heading)

// function makeSizer() {
//   return function (size) {
//     heading.style.fontSize = `${size}px`;
//   };
// //   console.log("kia mai chala")
// }

// let changeSize = makeSizer()

// let changeSize = makeSizer();
// console.log(changeSize)
// changeSize(12)


// function makeIncrement (){
//     let count = 32
//     return function () {
//         heading.style.fontSize = `${count++}px`
//         return count
//     }
// }

// let incrementFn = makeIncrement()
// // incrementFn()

// btn.addEventListener("click", function (){
//     console.log(incrementFn())
// });
