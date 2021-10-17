//prepare for a lot of comments.
function populateTodoList(originalTodos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  //maybe remove all li elements from the list
  //I can add the new items as objects inside the todos array
  //this way I can run through this function
  //whenever a new item is added?

  //clear the list
  const newList = originalTodos;
  for (elem of originalTodos) {
    list.innerHTML = "";
  }

  //iterate todos and add them to the list
  for (let i = 0; i < newList.length; i++) {
    //create list item element
    const liEl = document.createElement("li");
    //apply li class
    liEl.className =
      "list-group-item d-flex justify-content-between align-items-center";
    //add task name to the innerHTML
    liEl.innerHTML = newList[i].task;
    //append li to list
    list.appendChild(liEl);

    //create span element
    const spanEl = document.createElement("span");
    //add span class
    spanEl.className = "badge bg-primary rounded-pill";
    //append the span to the li element
    liEl.appendChild(spanEl);

    //create idiomatic elements
    const iEl1 = document.createElement("i");
    //add i class
    iEl1.className = "fa fa-check";
    //aria-hidden="true (not sure what this means)
    iEl1.ariaHidden = true;
    //append i to span
    spanEl.appendChild(iEl1);

    const iEl2 = document.createElement("i");
    //add i class
    iEl2.className = "fa fa-trash";
    //cant seem to add in the space between the icons
    //like in the two example todos
    //aria-hidden="true (not sure what this means)
    iEl2.ariaHidden = true;
    //append i to span
    spanEl.appendChild(iEl2);

    //add completed functionality to each todo element
    if (newList[i].completed === true) {
      //this stops the decoration resetting after every new task.
      liEl.style.textDecoration = "line-through";
    }
    function onTick() {
      liEl.style.textDecoration = "line-through";
      newList[i].completed = true;
    }
    iEl1.addEventListener("click", onTick);

    //add delete functionality to each todo element
    function onDelete() {
      newList.splice(newList.indexOf(newList[i]),1);
      liEl.remove()
    }
    iEl2.addEventListener("click", onDelete);
  }
  //save list backup
  todos = newList;
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Do the shopping", completed: false },
  { task: "Wash the dishes", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputFieldText = document.getElementById("todoInput").value;
  //this code runs when the button is clicked
  //get the text from the input field
  //create a new task
  //call populateTodoList
  if (inputFieldText.length > 0) {
    todos.push({
      task: inputFieldText,
      completed: false,
    });
    populateTodoList(todos);
  }
}

//I may come back to do the advanced challenges

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
