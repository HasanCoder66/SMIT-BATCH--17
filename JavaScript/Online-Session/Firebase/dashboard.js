import {
  getCurrentUser,
  getMultipleUsers,
  getSingleUser,
  logoutHandler,
} from "./firebase.js";

getCurrentUser();

let pappa = document.querySelector(".pappa")
let logoutBtn = document.querySelector("#logoutBtn");
let getSingleUserBtn = document.querySelector("#getSingleUserBtn");
let getAllUserBtn = document.querySelector("#getAllUserBtn");

logoutBtn.addEventListener("click", () => {
  logoutHandler();
});

getSingleUserBtn.addEventListener("click", () => {
  getSingleUser("zyKg3nm65zZX8ip4ut0zBLzfX9m2");
});


async function dum() {
  const allUsers = await getMultipleUsers();



 let htmlForPappa =  allUsers.map((user) => {
console.log(user)
        return  `   <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.username}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.email}</li>
    <li class="list-group-item">${user.password}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Update User</a>
    <a href="#" class="card-link">Delete User</a>
  </div>
</div>`
    })
   
    // console.log(htmlForPappa)
    pappa.innerHTML = htmlForPappa.join("")
}

dum()

// getAllUserBtn.addEventListener("click", () => {
//    console.log(getMultipleUsers())
// })
