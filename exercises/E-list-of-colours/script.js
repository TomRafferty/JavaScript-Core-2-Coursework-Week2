function listOfColours(colours) {
  // Write your code here...

  const contentEl = document.getElementById("content");

  //create select element
  const selectEl = document.createElement("select");
  //append selectEl to the DOM
  contentEl.appendChild(selectEl);
  //create a p element
  const paraEl = document.createElement("p");
  //add text to paraEl
  paraEl.textContent = "hello";
  //append paraEl to the DOM
  contentEl.appendChild(paraEl);

  //change colour
  selectEl.onchange = changeColour;
  function changeColour() {
    paraEl.style.color = selectEl.options[selectEl.selectedIndex].text;
  }

  //add all the colours as options in the select element
  for (let i = 0; i < colours.length; i++) {
    //create the option element
    const optionEl = document.createElement("option");
    //add the colour to the option
    optionEl.value = colours[i];
    optionEl.text = colours[i];
    selectEl.appendChild(optionEl);
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
