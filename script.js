let myLibrary = [];
const addBook = document.getElementById('add')
const popup = document.getElementById("popup")
function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = false
}

function addBookToLibrary() {
  // do stuff here
}

function openPopup (){
    popup.style.removeProperty('visible')
}