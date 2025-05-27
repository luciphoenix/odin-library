const cards = document.querySelector(".cards");
const addBook = document.querySelector(".submit");

const library = [
  {
    id: crypto.randomUUID(),
    author: "Elvis",
    pages: "6",
    title: "what life took form me",
    read: "read",
  },
  {
    id: crypto.randomUUID(),
    author: "Elvis",
    pages: "6",
    read: "read",
    title: "what life took form me",
  },
  {
    id: crypto.randomUUID(),
    author: "Elvis",
    pages: "6",
    read: "read",
    title: "what life took form me",
  },
  {
    id: crypto.randomUUID(),
    author: "Elvis",
    pages: "6",
    read: "read",
    title: "what life took form me",
  },
];

function Book(title, author, pages, read = "no") {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read == "yes" ? "Read" : "Not yet read";

  // this.info = function () {
  //   console.log(`${title} by ${author} has ${pages} pages - ${this.read}`);
  // };
}

const addBookToLibrary = (title, author, pages, read) => {
  const book = new Book(title, author, pages, read);
  library.push(book);
};

function createBookCard(book) {
  card = document.createElement("div");
  image = document.createElement("img");
  book_title = document.createElement("p");
  book_author = document.createElement("p");
  book_pages = document.createElement("p");
  book_read = document.createElement("button");
  book_info = document.createElement("div");

  card.setAttribute("class", "card");
  book_title.textContent = `Title: ${book.title}`;
  book_author.textContent = `Author: ${book.author}`;
  book_pages.textContent = `Pages: ${book.pages}`;
  book_read.textContent = `${book.read}`;
  image.setAttribute("src", "./image.png");

  book_read.classList.add("read");
  book_info.classList.add("book_info");

  // console.log(book_title);
  card.appendChild(image);
  book_info.appendChild(book_title);
  book_info.appendChild(book_author);
  book_info.appendChild(book_pages);
  book_info.appendChild(book_read);
  card.appendChild(book_info);
  cards.appendChild(card);
}

addBook.addEventListener("click", CreateNewBook);

function CreateNewBook(e) {
  e.preventDefault();
  const bookReadInput = document.querySelector("[name= read]:checked");
  const bookTitleInput = document.querySelector("[name = title]");
  const bookAuthorInput = document.querySelector("[name=author");
  const bookPagesInput = document.querySelector("[name=pages]");

  author = bookAuthorInput.value;
  title = bookTitleInput.value;
  read = bookReadInput.value;
  pages = bookPagesInput.value;
  // console.log(author);
  addBookToLibrary(title, author, pages, read);

  // restore values to default
  bookAuthorInput.value = "";
  bookTitleInput.value = "";
  bookReadInput.checked = false;
  bookPagesInput.value = "";

  cards.textContent = "";
  // console.log(library);

  library.forEach(createBookCard);
}

library.forEach(createBookCard);
