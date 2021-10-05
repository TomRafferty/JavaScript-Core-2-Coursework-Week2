function shoppingList(arrayOfShopping) {
  // Write your code here...
  const content = document.querySelector("#content");
  const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  for(let i = 0; i < arrayOfShopping.length; i++){
    let listItem = document.createElement("li");
    let listText = document.createTextNode(arrayOfShopping[i]);
    listItem.appendChild(listText);
    unorderedList.appendChild(listItem);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
