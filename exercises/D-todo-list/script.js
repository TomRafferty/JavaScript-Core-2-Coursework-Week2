function todoList(todos) {
  // Write your code here...
  const contentEl = document.getElementById("content");

  //create the list and its elements
  const unorderedListEL = document.createElement("ul");
  contentEl.appendChild(unorderedListEL);
  for (let i = 0; i < todos.length; i++) {
    const listItemEl = document.createElement("li");
    listItemEl.innerHTML = todos[i].todo;
    unorderedListEL.appendChild(listItemEl);

    const listItemObject = todos[i];

    function lineThrough() {
      listItemEl.style.textDecoration = "line-through";
      listItemObject.isChecked = true;
      console.log("wasn't checked, is now checked.");
      console.log(listItemObject.isChecked);
    }
    function removeLine() {
      listItemEl.style.textDecoration = "none";
      listItemObject.isChecked = false;
      console.log("was checked, not anymore");
      console.log(listItemObject.isChecked);
    }
    if (listItemObject.isChecked === false) {
      listItemEl.addEventListener("click", lineThrough);
    }
    if (listItemObject.isChecked === true) {
      listItemEl.addEventListener("click", removeLine);
    }
  }
}

const todos = [
  { todo: "wash the dishes", isChecked: false },
  { todo: "walk the dog", isChecked: false },
  { todo: "learn javascript", isChecked: false },
  { todo: "go shopping", isChecked: false },
];

todoList(todos);
