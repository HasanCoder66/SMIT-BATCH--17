let resturantMenu = [
    {
        name : "Zinger Burger",
        price : 300,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Club Sandwich",
        price : 450,
        description :"acha wala sandwich",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Shawarma",
        price : 300,
        description :"tasty shawarma",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Biryaani",
        price : 300,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Korma",
        price : 300,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Mandi",
        price : 300,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "lunch"

    },
    {
        name : "Halwa Puri",
        price : 300,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "breakfast"

    },
    {
        name : "Chai",
        price : 70,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "breakfast"

    },
    {
        name : "Cold Coffee",
        price : 70,
        description :"acha wala zinger burger",
        imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV1p0EH5jVmPJlaUQjaICm2W3pYHbiC8AMuA&s",
        category : "beverages"

    },
]


// variables
let cardParent = document.getElementById("cardParent")
let lunchBtn = document.getElementById("lunch")
let allMenuBtn = document.getElementById("allMenu")
let breakfastBtn = document.getElementById("breakfast")
let bevragesBtn = document.getElementById("beverages")
let searchBtn = document.getElementById("searchBtn")
let input = document.getElementById("exampleFormControlInput1")
// console.log(input)

// console.log(searchBtn)
// console.log(cardParent)

// const allMenuHandler = () => {
//     let returnItems = resturantMenu.map((item) => {
//         const cardHTML = `
//         <div class="card" style="width: 18rem;">
//                         <img src="${item.imgUrl}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">${item.name}</h5>
//                           <p class="card-text">${item.description}</p>
//                           <a href="#" class="btn btn-primary">${item.price}</a>
//                         </div>
//                       </div>`
    
//                       return cardHTML
//                     })
//                     cardParent.innerHTML = returnItems.join("")
    
//     // console.log(returnItems)
// }

// allMenuHandler()

// const lunchHandler = () => {
//     console.log("mai chl raha hon -->")
//     let filteredItems = resturantMenu.filter((item) => item.category == "lunch").map((item) => {
//         const cardHTML = `
//         <div class="card" style="width: 18rem;">
//                         <img src="${item.imgUrl}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">${item.name}</h5>
//                           <p class="card-text">${item.description}</p>
//                           <a href="#" class="btn btn-primary">${item.price}</a>
//                         </div>
//                       </div>`

//                       return cardHTML
//     })

//     // console.log(filteredItems)
//     cardParent.innerHTML = filteredItems.join("")
// }

// const breakfastHandler = () => {
//     console.log("mai chl raha hon -->")
//     let filteredItems = resturantMenu.filter((item) => item.category == "breakfast").map((item) => {
//         const cardHTML = `
//         <div class="card" style="width: 18rem;">
//                         <img src="${item.imgUrl}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">${item.name}</h5>
//                           <p class="card-text">${item.description}</p>
//                           <a href="#" class="btn btn-primary">${item.price}</a>
//                         </div>
//                       </div>`

//                       return cardHTML
//     })

//     // console.log(filteredItems)
//     cardParent.innerHTML = filteredItems.join("")
// }
// const beveragesHandler = () => {
//     console.log("mai chl raha hon -->")
//     let filteredItems = resturantMenu.filter((item) => item.category == "beverages").map((item) => {
//         const cardHTML = `
//         <div class="card" style="width: 18rem;">
//                         <img src="${item.imgUrl}" class="card-img-top" alt="...">
//                         <div class="card-body">
//                           <h5 class="card-title">${item.name}</h5>
//                           <p class="card-text">${item.description}</p>
//                           <a href="#" class="btn btn-primary">${item.price}</a>
//                         </div>
//                       </div>`

//                       return cardHTML
//     })

//     // console.log(filteredItems)
//     cardParent.innerHTML = filteredItems.join("")
// }



const menu = (category) => {
    let returnItems = resturantMenu.filter((item) =>  {
        if(category) {
            return item.category == category
        }else {
            return true
        }
    }).map((item) => {
        const cardHTML = `<div class="card" style="width: 18rem;">
        <img src="${item.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
          <a href="#" class="btn btn-primary">${item.price}</a>
        </div>
        </div>`
        return cardHTML
    })
    // console.log(returnItems)

    cardParent.innerHTML = returnItems.join("")





}

const searchHandler = (a) => {
    // console.log(input.value)

    let findItems = resturantMenu.find((item) => item.name.toLowerCase() == input.value.toLowerCase())
    console.log(findItems)

    if(!findItems) {
        return cardParent.innerHTML = `<h1> No Items Found </h1>`
    }

    const cardHTML = `<div class="card" style="width: 18rem;">
    <img src="${findItems.imgUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${findItems.name}</h5>
      <p class="card-text">${findItems.description}</p>
      <a href="#" class="btn btn-primary">${findItems.price}</a>
    </div>
    </div>`
    // return cardHTML

cardParent.innerHTML = cardHTML
}

lunchBtn.addEventListener("click", () => menu("lunch"))
allMenuBtn.addEventListener("click", () => menu())
breakfastBtn.addEventListener("click",() => menu("breakfast"))
bevragesBtn.addEventListener("click", () => menu("beverages"))
searchBtn.addEventListener("click", searchHandler)