import { Todo } from "./models/Todo";

let todoContainer = document.getElementById("theList");
let doneContainer = document.getElementById("doneList");

let todoItems = [];

window.onload = () => {
  todoList();
};

function todoList() {
  for (let i = 0; i < todoItems.length; i++) {
    let listItemContainer = document.createElement("li");
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
  let doneItem = finishedItem.item;
  doneItem.finished = true;
  todoItems.splice(index, 1);
  console.log(doneItem + ": klar");

  isItDone(doneItem);
}

function isItDone(doneItem) {
  if ((doneItem.finished = true)) {
    doneList(doneItem);
  }
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
