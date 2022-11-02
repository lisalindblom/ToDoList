let todoContainer = document.getElementById("theList");
let doneContainer = document.getElementById("doneList");
//min inputtag
//let addTodo = document.getElementById("addTodo");
let toDo = document.getElementById("toDo");
let done = document.getElementById("done");

class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }
}

// skapar nya object i listan
let todoItems = [
  new Todo("städa", false),
  new Todo("tvätta", false),
  new Todo("plugga", false),
  new Todo("jobba", false),
];

window.onload = () => {
  todoList();
};

function todoList() {
  for (let i = 0; i < todoItems.length; i++) {
    let listItemContainer = document.createElement("li");
    JSON.stringify(todoItems.item);
    listItemContainer.innerHTML = todoItems[i].item;
    listItemContainer.classList.add("clickable");
    todoContainer.appendChild(listItemContainer);
    listItemContainer.addEventListener("click", () => {
      handleClick(listItemContainer, todoItems[i]);
    });
  }
}

function handleClick(listItemContainer, done) {
  JSON.stringify(done);
  let index = todoItems.indexOf(done);

  //lägger väret för done item i en variabel för att kunna skicka den till doneList
  let doneItem = done.item;
  // splice för att ta bort objektet användaren klickat på
  todoItems.splice(index, 1);
  console.log(doneItem + ": klar");
  // tömmer listan inför nästa loop
  todoContainer.innerHTML = " ";

  todoList();
  doneList(doneItem);
}

function doneList(doneItem) {
  let doneItemContainer = document.createElement("li");
  doneContainer.appendChild(doneItemContainer);
  doneItemContainer.classList.add("clickable");

  JSON.stringify(doneItem.item);
  doneItemContainer.innerHTML = doneItem;

  // doneItemContainer.addEventListener("click", () => {
  //   back(doneItemContainer, doneItem[i]);
  // });
}
