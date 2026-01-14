// console.log("Hello World!")

function addTodoItems() {
  let todoText = document.getElementById("todoText");
  // console.log("Todo Text ==> ",todoText.value)
  if (todoText.value.trim() === "") {
    Swal.fire("Please Enter a Value!");
    return;
  } else {
    let todoList = document.getElementById("todoList");
    // console.log("Todo List ==> ",todoList)
    let todoItem = `<li class="todoItems">${todoText.value} <i onclick="deleteSingleTodo()" class="fa-solid fa-xmark"></i> </li>`;

    todoList.innerHTML += todoItem;

    todoText.value = "";
  }
}

function deleteSingleTodo() {
  event.target.parentElement.remove();
}

function deleteAllTodoElem() {
  // console.log("clicked")

  let todoList = document.getElementById("todoList");
  console.log(todoList.children);
  //  todoList.children.length
  // console.log(childLength)

  if (todoList.children.length === 0) {
    Swal.fire("No Items to Delete!");
  }

  for (let i = 0; i < todoList.children.length; i++) {
    todoList.children[i].remove();
    i--;
  }
}

// 0    0 li  -- > remove
// 1
