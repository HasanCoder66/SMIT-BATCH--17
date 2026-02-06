import {
  addUserData,
  getCurrentUser,
  getMultipleUsers,
  getSingleUser,
  logoutHandler,
  deleteDocumentandUser
} from "./firebase.js";

let userName = document.getElementById("userName");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let formFile = document.getElementById("formFile");
let description = document.getElementById("floatingTextarea");
let saveBtn = document.getElementById("saveBtn");

getCurrentUser();

let pappa = document.querySelector(".pappa");
let logoutBtn = document.querySelector("#logoutBtn");
let getSingleUserBtn = document.querySelector("#getSingleUserBtn");
let getAllUserBtn = document.querySelector("#getAllUserBtn");

let id = "";

// getSingleUserBtn.addEventListener("click", () => {
//   getSingleUser("vLmz2QqALMUu1flccYqQpAIgB9w1");
// });

const delay2s = () => {
   setTimeout(() => {
    window.location.reload();
  }, 2000);
}

const saveChangesHandler = () => {
  console.log("mai chl rahaa hoon ==>");

  // return
  addUserData(
    "users",
    {
      username: userName.value,
      email: email.value,
      password: password.value,
      description: description.value,
    },
    id,
  );

 delay2s()
};

async function dum() {
  const allUsers = await getMultipleUsers();

  let htmlForPappa = allUsers.map((user) => {
    console.log(user.profilePic)
    return `   <div data-id=${user.id} class="card" style="width: 18rem;">
  <img src=${user.profilePic || "https://res-console.cloudinary.com/dpvxkqhi8/thumbnails/v1/image/upload/v1760005240/Y2R4L29zbWFuX2doYXppX3ViYzluaA==/drilldown"} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.username}</h5>
    <p class="card-text">${user.description || "No Description Added yet!"}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${user.email}</li>
    <li class="list-group-item">${user.password}</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body d-flex justify-content-evenly">
    <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-outline-primary">Update User</button>
    <button class="btn btn-outline-danger" class="card-link">Delete User</button>
  </div>
</div>`;
  });

  // console.log(htmlForPappa)
  pappa.innerHTML = htmlForPappa.join("");
}

dum();

// getAllUserBtn.addEventListener("click", () => {
//    console.log(getMultipleUsers())
// })

document.addEventListener("click", async (event) => {
  // console.log("mai chlaaa ==>", event.target.innerText == "Update User")

  // console.log(event.target.innerText !== "Update User" || event.target.innerText !== "Delete User")
  // if(event.target.innerText !== "Update User" || event.target.innerText !== "Delete User") {
  //   return
  // }

  if (event.target.innerText == "Update User") {
    // console.log()
    id = event.target.parentElement.parentElement.dataset.id;
    let userDetail = await getSingleUser(id);

    console.log("update wali id ==>", id);

    // console.log(userDetail);

    userName.value = userDetail.username;
    email.value = userDetail.email;
    password.value = userDetail.password;
    description.value = userDetail?.description || "No Description added";
  }

  if (event.target.innerText == "Delete User") {
    console.log("Delete wala if chalaa ==>");
    id = event.target.parentElement.parentElement.dataset.id;
    //  console.log("delete wali id ==>", id)
    deleteDocumentandUser("users", id);
    
    delay2s()
  }
});


logoutBtn.addEventListener("click", () => {
  logoutHandler();
});


saveBtn.addEventListener("click", () => {
  saveChangesHandler();
});
