function highlightWords(paragraph, colours) {
  // this is a right mess right now
  const contentEl = document.getElementById("content");
  //create the p element (now create one for each word) + span
  const paraSep = paragraph.split(" ");
  for(let i = 0; i < paraSep.length; i++){
    //create <p>
    const pEl = document.createElement("p");
    contentEl.appendChild(pEl);
    //create <span>
    const spanEl = document.createElement("span");
    
    
    const pObj = {
      isChecked: false,
    };
    pEl.style.display = "inline-block";
    //add spaces
    if (i < paraSep.length - 1) {
      pEl.innerHTML = `${paraSep[i]}&nbsp;`;
    } else {
      pEl.innerHTML = `${paraSep[i]}`;
    }
    pEl.appendChild(spanEl);
    function highlight() {
      console.log(selectEl.options[selectEl.selectedIndex]);
      if (!pObj.isChecked) {
        spanEl.style.backgroundColor = selectEl.options[selectEl.selectedIndex];
        console.log(spanEl);
        pObj.isChecked;
      }
    }
    pEl.addEventListener("click", highlight);
    contentEl.appendChild(pEl);
  }
  

  //add the select element
  const selectEl = document.createElement("select");
  contentEl.appendChild(selectEl);
  //add the options
  for(let i = 0; i < colours.length; i++){
    let optionEl = document.createElement("option");
    console.log(colours[i])
    optionEl.text = colours[i];  
    selectEl.appendChild(optionEl);
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
