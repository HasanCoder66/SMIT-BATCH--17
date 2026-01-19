// console.log("mens js connect ==>")

import { mensProducts, sweety } from "../DummyData/dummyData.js";

let isLoggedInUser = JSON.parse(localStorage.getItem("isUser"));
let btnsParent = document.querySelector(".btns");
let formInput = document.querySelector(".form-control");
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let mensCardParent = document.getElementById("mensCardParent");
let searchForm = document.getElementById("searchForm");

if (isLoggedInUser) {
  btnsParent.innerHTML = ` <button type="button" class="btn btn-outline-primary logoutBtn">Logout</button>`;
  // btnsParent.innerHTML = "Hey User!"
  // btnsParent.innerHTML = "Hey User!"
} else {
  btnsParent.innerHTML = `<a href="/Pages/login.html"> <button type="button" class="btn btn-outline-primary">Login</button></a>
           <a href="/Pages/signup.html"> <button type="button" class="btn btn-outline-primary">
              Signup
            </button></a>`;
}

const updateBadge = () => {
  let totalCartQty = cartArray.reduce((sum, val) => sum + val.quantity, 0);
  badge.innerText = totalCartQty;
};

const card = (id, price, title, desc) => {
  //   console.log(title);

  return ` <div class="card" style="width: 18rem">
          <img src=${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5toS-89GU2bOziSAxXk9Ek3-V2mv8YP6-qw&s"} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
             ${desc}
            </p>
            <p class="card-text">
             ${price}
            </p>
            <button class="btn btn-primary addToCartBtn" data-product-id=${id}  >Add To Cart</button>
          </div>
        </div>`;
};

// mens card mapping ==>
const mensCardMap = (data = mensProducts) => {

  if (data.length == 0) {
    return (mensCardParent.innerHTML = `<h1> No Product Found </h1>`);
  }

  let returnVal = data.map((item) => {
    return card(item?.id, item?.price, item?.title, item?.description);
  });
  mensCardParent.innerHTML = returnVal.join(" ");
};

const startMensApp = () => {
  updateBadge();
  mensCardMap();
};

startMensApp();
const searchHandler = () => {
  event.preventDefault();
  let searchValue = formInput.value.toLowerCase();

  let filteredItems = mensProducts.filter((product) =>
    product.title.toLowerCase().includes(searchValue),
  );
  
  mensCardMap(filteredItems);
  // console.log("hey!")
};

const addToCartHandler = (btn) => {

  if (!isLoggedInUser) {
    return sweety("error", "Oops", "Please Login First");
  }

  let prodId = Number(btn.dataset.productId);
  console.log("My Product click id", prodId);

  const product = mensProducts.find((item) => item.id == prodId) 
  // console.log(product);

  let returnVal = cartArray.find((item) => item.id == prodId);
  // console.log(returnVal);

  if (returnVal) {
    returnVal.quantity += 1;
  } else {
    cartArray.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));
  sweety("success", "Welldone", "Added to Cart Successfully");
  updateBadge()
};

searchForm.addEventListener("submit", searchHandler);
document.addEventListener("click", (e) => {

  if (e.target.classList.contains("addToCartBtn")) {
    addToCartHandler(e.target);
  }
});
