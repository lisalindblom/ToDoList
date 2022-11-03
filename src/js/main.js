import { Todo } from "./models/Todo";

let todoContainer = document.getElementById("theList");
let doneContainer = document.getElementById("doneList");

let toDo = document.getElementById("toDo");
let done = document.getElementById("done");

let todoAgain = " ";

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

function todoList(todoAgain) {
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

//min button
let addTodo = document.getElementById("addTodo");
//inputtagen
let addItem = document.getElementById("addItem").value;

addTodo.addEventListener("click", addByUser);

function addByUser(addItem) {
  let itemAdded = new Todo(addItem, false);
  todoItems.push(itemAdded);
  console.log(itemAdded);
}

function handleClick(listItemContainer, finishedItem) {
  let index = todoItems.indexOf(finishedItem);
  JSON.stringify(finishedItem);

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
    console.log("true");
    doneList(doneItem);
  }
  // göra en if false lägg till på todolista och hantera klick på klar listan på samma sätt
  //för att kunna lägga tillbaks dom på todo
  todoContainer.innerHTML = " ";
  todoList();
}

function doneList(doneItem) {
  let doneItemContainer = document.createElement("li");
  doneContainer.appendChild(doneItemContainer);
  doneItemContainer.classList.add("clickable");

  JSON.stringify(doneItem.item);
  doneItemContainer.innerHTML = doneItem;

  console.log("klick");

  doneItemContainer.addEventListener("click", () => {
    back(doneItemContainer, doneItem);
  });
}

function back(doneItemContainer, todoAgain) {
  let todoItemAgain = new Todo(todoAgain, false);
  console.log(todoItemAgain);
  todoItems.push(todoItemAgain);

  todoContainer.innerHTML = " ";

  todoList();
}
