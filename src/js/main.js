let listContainer = document.getElementById("theList");
let addTodo = document.getElementById("addTodo");

class Todo {
  constructor(item, finished) {
    this.item = item;
    this.finished = finished;
  }
}

// pusha in användarens punkter i denna?
//let newTodoItems = new Todo(addTodo.value, false);

window.onload = () => {
  theList();
};
let listItems = ["städa", "tvätta", "plugga", "träna", "jobba"];

function theList() {
  for (let i = 0; i < listItems.length; i++) {
    let listItemContainer = document.createElement("li");

    listItemContainer.innerHTML += listItems[i];
    listItemContainer.classList.add("clickable");
    listContainer.appendChild(listItemContainer);
    listItemContainer.addEventListener("click", () => {
      handleClick(listItemContainer, listItems[i]);
    });
  }
}
function handleClick(newLi, done) {
  console.log("du klickade på " + done);
  newLi.innerHTML = " ";

  // göra lista att lägga klara todos i så att de sen kan klickas tillbaks,
  // koppla ihop med vår konstruktor för att kunna pusha in de splicade grejerna
  //i klar listan. läs om klasser och constructor igen
  //   let doneList = document.getElementById("doneList");
  //   let doneItem = document.createElement("li");
  //   doneList = document.appendChild(doneItem);
  //let doneContent = listItems.splice(done, 1);
  //   doneItem.innerHTML = doneList;

  newList = listItems.splice(done, 1);

  //console.log(doneList);
  theList(newList);
}
