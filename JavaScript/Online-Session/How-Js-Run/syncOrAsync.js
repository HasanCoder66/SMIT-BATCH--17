// Synchronus Code
let a = 10;
let b = 11;

let result = a + b;
// console.log(result)

// Asynchronus Code

// Promise

// fullfil
// reject

// async function getData(){
// let response = await fetch("https://jsonplaceholder.typicode.com/posts")

// const data = await response.json()
// console.log(data)
// }

// getData()

// function printName (data){
//     console.log(data)
// }

// let res = fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())

// console.log(res);

// let singleItem = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//       console.log("singleItem -->",singleItem)

// Asynchronus Code

// async function data(){
// let responseFromServer = await fetch("https://jsonplaceholder.typicode.com/todos")

// const data = await responseFromServer.json()
// console.log(data)
// }

// data()

// setTimeout(() => {
//     console.log("this is from setTimeout")
// }, 1000)

// Synchronus Code

// let ninety = 90;
// let ninetyone = 91;

// let nResult = ninety + ninetyone
// console.log(nResult)

let parent = document.querySelector(".parent");
console.log(parent);

async function getData() {
  let apiRes = await fetch("https://picsum.photos/v2/list");
  const data = await apiRes.json();

  let returnOfMap = data.map((item) => {
    const htmlForBody = `<div class="card">
        <div>
          <img
            src=${item.download_url}
            alt=""
          />
        </div>
        <h2>Author: ${item.author}</h2>
      </div>`;
    return htmlForBody;
  });
  parent.innerHTML = returnOfMap.join(" ");
}

getData()