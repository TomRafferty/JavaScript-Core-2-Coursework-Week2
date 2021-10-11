function readingList(books) {
  // Write your code here...

  //the css isn't exactly right
  //but the main jist of it is there

  //separating into parts
  const bookTitles = books.map((x) => x.title);
  const bookAuthors = books.map((x) => x.author);
  const booksAlreadyRead = books.map((x) => x.alreadyRead);
  console.log(bookTitles);
  //target
  const content = document.querySelector("#content");

  //create header
  const headerEl = document.createElement("h1");
  headerEl.innerHTML = "Books";
  content.insertBefore(headerEl, content.firstChild);

  //make the list element
  const unorderedList = document.createElement("ul");
  unorderedList.style.display = "flex";
  unorderedList.style.flexFlow = "row wrap";
  unorderedList.style.listStyle = "none";
  content.appendChild(unorderedList);

  for (let i = 0; i < books.length; i++) {
    //create a book list item
    const bookItem = document.createElement("li");

    bookItem.style.padding = "2em";
    bookItem.style.margin = "1em";
    bookItem.style.maxWidth = "10em";
    unorderedList.appendChild(bookItem);

    //add p elements for title and author
    const titleParaEl = document.createElement("p");
    titleParaEl.innerHTML = bookTitles[i];
    bookItem.appendChild(titleParaEl);

    const authorParaEl = document.createElement("p");
    authorParaEl.innerHTML = bookAuthors[i];
    bookItem.appendChild(authorParaEl);

    //add img
    const coverImgEl = document.createElement("img");
    coverImgEl.src = books[i].coverUrl;
    coverImgEl.style.height = "10em";
    coverImgEl.style.width = "5em%";
    bookItem.appendChild(coverImgEl);

    //change back ground colour for each book
    if (booksAlreadyRead[i] === true) {
      bookItem.style.background = "green";
    } else {
      bookItem.style.background = "red";
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
];

readingList(books);
