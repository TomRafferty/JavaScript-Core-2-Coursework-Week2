const blueBtn = document.getElementById("blueBtn");
const orngBtn = document.getElementById("orangeBtn");
const grnBtn = document.getElementById("greenBtn");
const jumbo = document.querySelector(".jumbotron");
const donateBikeBtn = document.getElementsByClassName(
  "btn btn-primary btn-lrg"
)[0];
const volunteerBtn = document.getElementsByClassName(
  "btn btn-secondary btn-lrg"
)[0];

function blueFunc() {
  jumbo.style.backgroundColor = "#588fbd";
  donateBikeBtn.style.backgroundColor = "#ffa500";
  volunteerBtn.style.backgroundColor = "black";
  volunteerBtn.style.color = "white";
}
function orngFunc() {
  jumbo.style.backgroundColor = "#f0ad4e";
  donateBikeBtn.style.backgroundColor = "#5751fd";
  volunteerBtn.style.backgroundColor = "#31b0d5";
  volunteerBtn.style.color = "white";
}
function grnFunc() {
  jumbo.style.backgroundColor = "#87ca8a";
  donateBikeBtn.style.backgroundColor = "black";
  volunteerBtn.style.backgroundColor = "#8c9c08";
  //the readme doesn't specify that this should be
  //black but it starts black so I though it looks
  //best this way
  volunteerBtn.style.color = "black";
}
blueBtn.addEventListener("click", blueFunc);
orngBtn.addEventListener("click", orngFunc);
grnBtn.addEventListener("click", grnFunc);

//register form
/*
check length (not empty)
email must contain @
make invalid fields red
if all are valid{
    display alert thank you
    blank out all fields
}
*/
const formEl = document.getElementById("regForm");
const emailInputEl = document.getElementById("exampleInputEmail1");
const subBtn = document.getElementsByClassName("btn btn-primary")[0];

function onSubmit(e) {
    e.preventDefault()
  //check email
  console.log("working")
  let emailValid;
  if (emailInputEl.value.includes("@") && emailInputEl.value.length > 0) {
    emailValid = true;
    console.log("good")
  }else{
    emailValid = false;
    console.log("bad")
  }
}

formEl.addEventListener("submit", onSubmit);
