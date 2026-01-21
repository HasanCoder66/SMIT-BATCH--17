// console.log("js is running ->")
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");
let input = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");

const itemFn = (recipe) => {
  console.log(recipe);
  return `<div class="item" data-recipe-id=${recipe.id}>
                <img src=${
                  recipe.image_url
                } alt=${recipe.publisher} height="100px" width="100px">
                <div id="productInfo">
                    <h3>${recipe.title}</h3>
                    <p>${recipe.publisher}</p>
                </div>
            </div>`;
};

const startApp = async () => {
  //   fetch("https://forkify-api.jonas.io/api/v2/recipes?search=burger")
  //     .then((res) => res.json())
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error))

  let apiRes = await fetch(
    "https://forkify-api.jonas.io/api/v2/recipes?search=burger",
  );
  let result = await apiRes.json();

  const {
    data: { recipes },
  } = result;
  console.log(recipes);

  let allHTMLForUI = recipes.map((recipe) => {
    return itemFn(recipe);
  });
  sidebar.innerHTML = `<h1> Loading... </h1>`;

  setTimeout(() => {
    sidebar.innerHTML = allHTMLForUI.join("");
  }, 1000);
};

startApp();
const searchHandler = async () => {
  let searchVal = input.value;

  let apiRes = await fetch(
    `https://forkify-api.jonas.io/api/v2/recipes?search=${searchVal}`,
  );
  let result = await apiRes.json();

  // console.log(result)
  const {
    data: { recipes },
  } = result;
  // console.log(recipes)
  let allHTMLForUI = recipes.map((recipe) => itemFn(recipe));
  // console.log(allHTMLForUI)
  sidebar.innerHTML = allHTMLForUI.join("");
};

const particularItemDetails = async (elem) => {
//   console.log("mai chl raha hon");
// console.log(elem)
let id = elem.dataset.recipeId
// console.log(id)

let apiRes = await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
let result = await apiRes.json()

// console.log(result)
const {data:{recipe}}= result
console.log(recipe)

main.innerHTML = `<img src=${recipe.image_url} alt="">
            <h3>Title: ${recipe.title}</h3>
            <h3>Serving: ${recipe.servings}</h3>
            <h3>Cooking Time ${recipe.cooking_time}</h3>`

};

searchBtn.addEventListener("click", searchHandler);
document.addEventListener("click", (e) => {
  // console.log("chla hon per kahan ", e.target.classList)
  if (e.target.classList.contains("item")) {
    particularItemDetails(e.target);
  }
});
