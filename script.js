let myLibrary = [];
const popup = document.getElementById("popup")
const addPopup = document.getElementById('add-popup')

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
    this.read = false
}

function addBookToLibrary() {
  closePopup()
}

function openPopup (){
    popup.style.visibility='visible'
    
}
function closePopup (){
  popup.style.visibility='hidden'
  popup.reset()
  
}