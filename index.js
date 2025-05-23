const cards = document.querySelector(".cards");

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
];

function Book(title, author, pages, read = false) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "Read" : "Not yet read";

  this.info = function () {
    console.log(`${title} by ${author} has ${pages} pages - ${this.read}`);
  };
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
  book_read = document.createElement("p");

  card.setAttribute("class", "card");
  book_title.textContent = `Title: ${book.title}`;
  book_author.textContent = `Author: ${book.author}`;
  book_pages.textContent = `Pages: ${book.pages}`;
  book_read.textContent = `${book.read}`;
  image.setAttribute("src", "./image.png");

  console.log(book_title);
  card.appendChild(image);
  card.appendChild(book_title);
  card.appendChild(book_author);
  card.appendChild(book_pages);
  card.appendChild(book_read);

  cards.appendChild(card);
}

library.forEach(createBookCard);
