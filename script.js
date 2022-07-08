const myLibrary = []

const popup = document.getElementById("popup")
const popupForm = document.getElementById("popup-form")
const addPopup = document.getElementById("add-popup")
const bookContainer = document.getElementById("books-container")

popupForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const titleVal = popupForm.querySelector('input[name="title"').value
  const authorVal = popupForm.querySelector('input[name="author"').value
  const pagesVal = popupForm.querySelector('input[name="pages"').value
  const newBook = new Book(titleVal, authorVal, pagesVal)
  addBookToLibrary(newBook)
})

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
}

function addBookToLibrary(newBook) {
  closePopup()
  myLibrary.push(newBook)
  createGridItem(newBook)
}

function createGridItem(newBook) {
  const template = document.createElement("div")
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const newReadBtn = document.createElement("button")
  const newRemoveBtn = document.createElement("button")

  template.classList.add("book")

  bookContainer.appendChild(template)
  template.append(title)
  template.append(author)
  template.append(pages)
  template.append(newReadBtn)
  template.append(newRemoveBtn)

  title.innerHTML = newBook.title
  author.innerHTML = newBook.author
  pages.innerHTML = newBook.pages
  newReadBtn.innerHTML = "Read"
  newRemoveBtn.innerHTML = "Remove"

  newReadBtn.onclick = (e) => {
    e.target.style.backgroundColor = "#EA5C2B"
    e.target.innerHTML = "Not read"
  }
  newRemoveBtn.onclick = (e) => {
    console.log(2)
  }
}

// function fillGridItems(title, author, pages, newReadBtn, newRemoveBtn, newBook){} //

function openPopup() {
  popup.style.visibility = "visible"
}
function closePopup() {
  popup.style.visibility = "hidden"
  popupForm.reset()
}
function test(e) {
  e.stopPropagation()
}
