// console.log("js is running -->")


// Array or Objects mai sai extract kerna kia kehlata destructre...



// Array Destructure
let arr = [12, "hasan", false]

// console.log(arr[2], arr[0], arr[arr.length - 1])


const [hasan, val2, val3] = arr;


// console.log(hasan, val2, val3)



// let obj = {
// name :"hasan",
// age : 22,
// email :"codermhasan@gmai.com"
// }


// console.log(obj.name)


// const {name} = obj

// console.log(name)



// function abc ({name, email, age}) {
//     console.log(name, email, age)

//     // console.log(object)
// }

// abc(obj)




// Array Destructure

// let myArr = ["ayan", "saad", "abdul rafay"]


// const [ayan, saad, abdulRafay] = myArr


// console.log(ayan)


// Object Destructure

let myObj = {
    name :"Ayaan",
    age : 18,
    qualification : "Under-Graduate"
}


// const {name, age, qualification} = myObj

// console.log(name)


// function foo ({name}){
// console.log(name)
// }

// foo(myObj)





let nums = [{},{},{}]
// let nums2 = nums

// let combinedArr = [...nums, ...nums2]

// console.log(combinedArr)



// let [n1, n2, n3 , ...others] = nums


// Array Destructure


// console.log(others)



const xyz = (n) => {
// console.log(...n)
}


xyz(nums)



for (const index of nums){
    console.log(index)
}