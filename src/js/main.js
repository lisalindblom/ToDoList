import { Todo } from "./models/Todo";

let todoContainer = document.getElementById("theList");
let doneContainer = document.getElementById("doneList");

let toDo = document.getElementById("toDo");
let done = document.getElementById("done");

let todoAgain = " ";

let todoItems = [
  new Todo("städa", false),
  new Todo("tvätta", false),
  new Todo("plugga", false),
  new Todo("jobba", false),
];

window.onload = () => {
  todoList();
};

function todoList(todoAgain) {
  for (let i = 0; i < todoItems.length; i++) {
    let listItemContainer = document.createElement("li");
    JSON.stringify(todoItems.item);
    listItemContainer.innerHTML = todoItems[i].item;
    listItemContainer.classList.add("clickable");
    todoContainer.appendChild(listItemContainer);

    listItemContainer.addEventListener("click", () => {
      handleClick(todoItems[i]);
    });
  }
}

let addTodo = document.getElementById("addTodo");
let addItem = document.getElementById("addItem");

addTodo.addEventListener("click", () => {
  addByUser();
});

function addByUser() {
  let itemAdded = new Todo(addItem.value, false);
  todoItems.push(itemAdded);
  console.log(itemAdded);
  console.log(itemAdded.item);
  addItem.value = "";
  todoContainer.innerHTML = "";
  todoList();
}

function handleClick(finishedItem) {
  let index = todoItems.indexOf(finishedItem);

  //lägger väret för done item i en variabel för att kunna skicka den till doneList
  let doneItem = finishedItem.item;
  doneItem.finished = true;
  // splice för att ta bort objektet användaren klickat på
  todoItems.splice(index, 1);
  console.log(doneItem + ": klar");

  isItDone(doneItem);
}

function isItDone(doneItem) {
  if ((doneItem.finished = true)) {
    //console.log("true");
    doneList(doneItem);
  }
  // göra en if false lägg till på todolista och hantera klick på klar
  //listan på samma sätt för att kunna lägga tillbaks dom på todo

  todoContainer.innerHTML = " ";
  todoList();
}

function doneList(doneItem) {
  let doneItemContainer = document.createElement("li");
  doneContainer.appendChild(doneItemContainer);
  doneItemContainer.classList.add("clickable");

  doneItemContainer.innerHTML = doneItem;

  doneItemContainer.addEventListener("click", () => {
    doneItemContainer.innerHTML = " ";
    back(doneItem);
  });
}

function back(todoAgain) {
  let todoItemAgain = new Todo(todoAgain, false);
  console.log(todoItemAgain);
  todoItems.push(todoItemAgain);

  todoContainer.innerHTML = " ";
  todoList();
}
