// console.log("javascript is running ==>")
import {
  mensProducts,
  womensProducts,
  kidsProducts,
  sweety,
} from "../DummyData/dummyData.js";

// console.log(kidsProducts);

// Variables ==>
let mensCardParent = document.getElementById("mensCardParent");
let womensCardParent = document.getElementById("womensCardParent");
let kidsCardParent = document.getElementById("kidsCardParent");
let btnsParent = document.querySelector(".btns");
let logoutBtn = null;
let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(btnsParent);
let matchedProduct = false;
let isLoggedInUser = JSON.parse(localStorage.getItem("isUser"));
// console.log(isLoggedInUser);

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

const logoutHandler = () => {
  localStorage.setItem("isUser", JSON.stringify(false));
  window.location.reload();
};

// Functions ==>
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
const mensCardMap = () => {
  let returnVal = mensProducts.map((item) => {
    return card(item?.id, item?.price, item?.title, item?.description);
  });
  mensCardParent.innerHTML = returnVal.join(" ");
  // console.log(returnVal);
};

// womens card mapping ==>
const womensCardMap = () => {
  let returnVal = womensProducts.map((item) => {
    return card(item?.id, item?.price, item?.title, item?.description);
  });
  womensCardParent.innerHTML = returnVal.join(" ");
};

// kids card mapping ==>
const kidsCardMap = () => {
  let returnVal = kidsProducts.map((item) => {
    return card(item?.id, item?.price, item?.title, item?.description);
  });
  kidsCardParent.innerHTML = returnVal.join(" ");
};

const startApp = () => {
  mensCardMap();
  womensCardMap();
  kidsCardMap();
};

const addToCartHandler = (btn) => {
  // console.log("add to cart handler is working ==>",btn)
  // console.log(btn?.dataset?.productId)

  if (!isLoggedInUser) {
    return sweety("error", "Oops", "Please Login First");
  }

  let prodId = Number(btn.dataset.productId);
  console.log("My Product click id", prodId);

  const product =
    mensProducts.find((item) => item.id == prodId) ||
    womensProducts.find((item) => item.id == prodId) ||
    kidsProducts.find((item) => item.id == prodId);
  // console.log(product);

  // cartArray.find((item) => {
  //   // console.log(item.id == product.id)
  //   if (item.id == product.id) {
  //     matchedProduct = true;
  //   }
  // });

  // // console.log("if ==>",matchedProduct)
  // if (matchedProduct) {
  //   product.quantity += 1;
  //   // console.log(product.quantity += 1)
  // } else {
  //    console.log("else ==>",matchedProduct)
  //   cartArray.push({
  //     ...product,
  //     quantity: 1,
  //   });
  // }

  let returnVal = cartArray.find((item) => item.id == prodId);
  console.log(returnVal)
  let count = 0
  if (returnVal) {
    // console.log(product)
    console.log("true walaa");
    returnVal.quantity += 1
    console.log("kuch bi")
    // console.log(product.quantity)
  } else {
    cartArray.push({
      ...product,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cartArray));
  sweety("success", "Welldone", "Added to Cart Successfully");
};

startApp();

document.addEventListener("click", (e) => {
  // logoutBtn = e.target;
  // console.log(e.target.classList.contains("d-block"));
  if (e.target.classList.contains("logoutBtn")) {
    // console.log("bhai sahab btn mil gaya ==>")
    logoutHandler();
  }

  // console.log("event =>",e)
  // console.log("element =>",e.target)
  // console.log("element classlists =>",e.target.classList)
  // console.log("is element classlist exist =>",e.target.classList.contains("addToCartBtn"))

  if (e.target.classList.contains("addToCartBtn")) {
    addToCartHandler(e.target);
  }
  // else {
  //   console.log("btn nhi mila ==>")
  // }
});
