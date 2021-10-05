function readingList(books) {
  // Write your code here...

  //separating into parts
  const bookTitles = books.map((x) => (x = title));
  const bookAuthors = books.map((x) => (x = author));
  const booksAlreadyRead = books.map((x) => (x = alreadyRead));

  //target
  const content = document.querySelector("#content");

  //make the list element
  const unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);

  //make the books
  for(let i = 0; i < books.length; i++){
    //I think thi is a pretty solid start but I'm gonna take a break now
    const bookItem = document.createElement("li");
    content.appendChild(bookItem);

    const bookTitlePara = document.createElement()
    bookItem.appendChild(bookTitlePara);

    const bookTitleText = document.createTextNode(bookTitles[i]);
    bookItem.appendChild(bookTitleText);

    const bookAuthorPara = document.createElement("p");
    bookItem.appendChild(bookAuthorPara);

    const bookAuthorText = document.createTextNode(bookAuthors[i]);
    bookAuthorPara.appendChild(bookAuthorText);
  }
  
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
