// console.log("javascript is running ==>")
import {
  mensProducts,
  womensProducts,
  kidsProducts,
} from "../DummyData/dummyData.js";

// console.log(kidsProducts);

// Variables ==>
let mensCardParent = document.getElementById("mensCardParent");
let womensCardParent = document.getElementById("womensCardParent");
let kidsCardParent = document.getElementById("kidsCardParent");
let btnsParent = document.querySelector(".btns");
let logoutBtn = null;
console.log(btnsParent);

let isLoggedInUser = JSON.parse(localStorage.getItem("isUser"));
console.log(isLoggedInUser);

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
  window.location.reload()
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
            <button class="btn btn-primary">Add To Cart</button>
          </div>
        </div>`;
};

// mens card mapping ==>
const mensCardMap = () => {
  let returnVal = mensProducts.map((item) => {
    return card(item?.id, item?.price, item?.title, item?.description);
  });
  mensCardParent.innerHTML = returnVal.join(" ");
  console.log(returnVal);
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

startApp();

document.addEventListener("click", (e) => {
  // console.log("document pr kahi bi click hoga to chl jaye ga han chl jaye ga",e.target)
  // logoutBtn = e.target;
  // console.log(e.target.classList.contains("d-block"));
  if(e.target.classList.contains("logoutBtn")){
    // console.log("bhai sahab btn mil gaya ==>")
    logoutHandler()
  }
  // else {
  //   console.log("btn nhi mila ==>")
  // }
});
