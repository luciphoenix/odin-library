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
  book_info = document.createElement("div");

  card.setAttribute("class", "card");
  book_title.textContent = `Title: ${book.title}`;
  book_author.textContent = `Author: ${book.author}`;
  book_pages.textContent = `Pages: ${book.pages}`;
  book_read.textContent = `${book.read}`;
  image.setAttribute("src", "./image.png");

  book_read.classList.add("read");
  book_info.classList.add("book_info");

  console.log(book_title);
  card.appendChild(image);
  book_info.appendChild(book_title);
  book_info.appendChild(book_author);
  book_info.appendChild(book_pages);
  book_info.appendChild(book_read);
  card.appendChild(book_info);
  cards.appendChild(card);
}

library.forEach(createBookCard);
