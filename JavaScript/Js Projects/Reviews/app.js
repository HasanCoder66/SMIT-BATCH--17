var data = [
  {
    name: "Muhammad Hasan",
    position: "SMIT Trainer",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit officiis, suscipit consectetur, sapiente
        placeat repellendus iure perspiciatis labore atque soluta deleniti quam dolore!`,
    profilePic: "https://avatars.githubusercontent.com/u/140997677?v=4",
  },
  {
    name: "Ayaan Faheem",
    position: "Student",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit officiis, suscipit consectetur, sapiente
        placeat repellendus iure perspiciatis labore atque soluta deleniti quam dolore!`,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanlasPgQjfGGU6anray6qKVVH-ZlTqmuTHw&s",
  },
  {
    name: "Haider",
    position: "Student",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit officiis, suscipit consectetur, sapiente
        placeat repellendus iure perspiciatis labore atque soluta deleniti quam dolore!`,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&s",
  },
  {
    name: "Abdul Rafay",
    position: "Student",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit officiis, suscipit consectetur, sapiente
        placeat repellendus iure perspiciatis labore atque soluta deleniti quam dolore!`,
    profilePic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxz7qJ9pU6Xj2EJKaRDVz-9Bd0xh2LnMklGw&s",
  },
];

var profilePic = document.querySelector("img");
var userName = document.querySelector("#name");
var position = document.querySelector("h2");
var description = document.querySelector("p");

var index = 0;

function manipulateData() {
  profilePic.src = data[index].profilePic;
  userName.innerHTML = data[index].name;
  position.textContent = data[index].position;
  description.innerText = data[index].description;
}

function nextHandler() {
  if (index == data.length - 1) {
    index = 0;
  } else {
    index++;
  }

  // index = ++index % data.length;
  // index == data.length -1 ? index = 0 : index++
  manipulateData();
}

function prevHandler() {
  if (index == 0) {
    index = data.length - 1;
  } else {
    index--;
  }
  manipulateData();
}

manipulateData();