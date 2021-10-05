function listOfNames(arrayOfPeople) {
  const content = document.querySelector("#content");
  let names = arrayOfPeople.map((x) => x.name);
  let jobs = arrayOfPeople.map((x) => x.job);
  //this isn't the prettiest way but I need to move on
  for(let i = 0; i < people.length; i++){
    const header1 = document.createElement("h1");
    const header2 = document.createElement("h2");
    let textNames = document.createTextNode(names[i]);
    let textJobs = document.createTextNode(jobs[i]);
    header1.appendChild(textNames);
    header2.appendChild(textJobs);
    content.appendChild(header1);
    content.appendChild(header2);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
