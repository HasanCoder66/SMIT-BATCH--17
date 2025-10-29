const shop = {
    shoes: {
        title: "Shoes Collection",
        items: [
            { name: "Nike Air Max", price: 12000, description: "Comfortable running shoes" },
            { name: "Adidas Ultraboost", price: 15000, description: "Stylish and lightweight" },
        ],
    },
    cosmetics: {
        title: "Cosmetics & Beauty",
        items: [
            { name: "L'Oreal Lipstick", price: 2000, description: "Matte finish long lasting" },
            { name: "Maybelline Mascara", price: 1800, description: "Volumizing black mascara" },
        ],
    },
    groceries: {
        title: "Daily Groceries",
        items: [
            { name: "Basmati Rice", price: 400, description: "5kg premium quality rice" },
            { name: "Cooking Oil", price: 550, description: "1 litre sunflower oil" },
        ],
    },
    electronics: {
        title: "Electronics & Gadgets",
        items: [
            { name: "Samsung Smart TV", price: 120000, description: "55-inch 4K UHD LED" },
            { name: "Apple AirPods", price: 38000, description: "Wireless Bluetooth earbuds" },
        ],
    },
    clothing: {
        title: "Fashion & Clothing",
        items: [
            { name: "Denim Jeans", price: 2500, description: "Slim fit stretchable jeans" },
            { name: "Casual T-Shirt", price: 1200, description: "100% cotton printed tee" },
        ],
    },
    toys: {
        title: "Kids Toys",
        items: [
            { name: "Lego Classic", price: 8000, description: "Creative building blocks set" },
            { name: "RC Car", price: 3500, description: "Remote controlled race car" },
        ],
    },
    furniture: {
        title: "Home Furniture",
        items: [
            { name: "Wooden Chair", price: 4500, description: "Solid teak wood material" },
            { name: "Study Table", price: 9000, description: "Compact with drawers" },
        ],
    },
    books: {
        title: "Books & Stationery",
        items: [
            { name: "The Alchemist", price: 1200, description: "Novel by Paulo Coelho" },
            { name: "Notebook Set", price: 600, description: "Pack of 5 ruled notebooks" },
        ],
    },
    sports: {
        title: "Sports Items",
        items: [
            { name: "Cricket Bat", price: 3500, description: "English willow bat" },
            { name: "Football", price: 2000, description: "FIFA size 5 leather ball" },
        ],
    },
    jewelry: {
        title: "Jewelry & Accessories",
        items: [
            { name: "Gold Necklace", price: 55000, description: "22k pure gold chain" },
            { name: "Silver Ring", price: 4000, description: "Elegant design for men" },
        ],
    },
};



console.log(shop)



let mainUIComp = document.getElementById("mainUIComp")
//   console.log(mainUIComp)

for (let key in shop) {
    // console.log(shop[key].items)

    let createDiv = document.createElement("div")

    createDiv.classList.add("card")
    // console.log(createDiv)
    let createTitle = document.createElement("h2")
    // console.log(createTitle)
    createTitle.innerText = shop[key].title
    createDiv.append(createTitle)

    let items = shop[key].items
    // console.log(items)

    for(let i = 0; i < items.length; i++){
        
        let item = document.createElement("div")
        item.classList.add("item")
        
        createDiv.appendChild(item)
        
        // console.log(items[i].name)
        let itemInnerHTML = `<span>${items[i].name} </span>  <span>${items[i].price} </span> <span> ${items[i].description}</span>`
        item.innerHTML = itemInnerHTML
    }
    // console.log(createDiv)


    mainUIComp.appendChild(createDiv)
}