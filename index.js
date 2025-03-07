const library = []


function Book(title,author,pages,read=false){
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read? "Read" : "Not yet read"

    this.info = function(){
        console.log(`${title} by ${author} has ${pages} pages - ${this.read}`);
    
    }
}

const addBookToLibrary= (title,author,pages,read) => {
    const book = new Book(title,author,pages,read)
    library.push(book)
}