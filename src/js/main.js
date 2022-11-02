let listContainer = document.getElementById("theList");
let addTodo = document.getElementById("addTodo");

class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }
}

// skapar nya object i listan
let listItems = [
  new Todo("städa", false),
  new Todo("tvätta", false),
  new Todo("plugga", false),
  new Todo("jobba", false),
];

window.onload = () => {
  todoList();
};

function todoList() {
  for (let i = 0; i < listItems.length; i++) {
    let listItemContainer = document.createElement("li");
    JSON.stringify(listItems.item);
    listItemContainer.innerHTML = listItems[i].item;
    listItemContainer.classList.add("clickable");
    listContainer.appendChild(listItemContainer);
    listItemContainer.addEventListener("click", () => {
      handleClick(listItemContainer, listItems[i]);
    });
  }
}
function handleClick(listItemContainer, done) {
  JSON.stringify(done);
  console.log(done.item + ": klar");
  let index = listItems.indexOf(done);

  //   let doneList = document.getElementById("doneList");
  //   let doneItem = document.createElement("li");
  //   doneList = document.appendChild(doneItem);
  //   let doneContent = listItems.splice(done, 1);
  //   doneItem.innerHTML = doneList;

  // splice för att ta bort ibjektet användaren klickat på
  let doneItem = listItems.splice(index, 1);
  // tömmer listan inför nästa loop
  listContainer.innerHTML = " ";
  todoList();
}
