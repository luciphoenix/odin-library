function Book(title,author,pages,read=false){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read? "Read" : "Not yet read"

    this.info = function(){
        console.log(`${title} by ${author} has ${pages} pages - ${this.read}`);
    
    }
}

