//Skapar container för listan
let listContainer = document.getElementById("theList");
// skapar lista med innehåll till ul-listan
let totalList = "";

class Todo {
  constructor(item, finished, removed) {
    this.item = item;
    this.finished = finished;
    this.removed = removed;
  }
}

window.onload = () => {
  setTodo();
  handleClick();
};

function setTodo() {
  let listItems = ["städa", "tvätta", "plugga", "träna", "jobba"];

  for (i = 0; listItems.length; i++) {
    let setList = listItems[i];
    todoLoop(setList);
  }
}

function todoLoop(setList) {
  let listItemContainer = document.createElement("li");
  //listItemContainer.classList.add("clickable");
  let itemInput = document.getElementById("addItem");
  // använder classen Todo för att skapa nya list items från användaren
  let todo = new Todo(setList, false, false);

  totalList.push(todo); // pushar in ibjektet i listan

  for (i = 0; i < totalList.length; i++) {
    listItemContainer.innerHTML = listItems[i].item;
  }
  listItemContainer.innerHTML = todo.item;

  listContainer.appendChild(listItemContainer);

  listItemContainer.addEventListener("click", () => {
    handleClick(listItemsContainer[i]);
  });
}

function handleClick(listItemContainer) {
  console.log("du klickade på " + listItemContainer);
}
