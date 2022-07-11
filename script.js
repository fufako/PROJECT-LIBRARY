const myLibrary = []
let i = 0

const popup = document.getElementById("popup")
const popupForm = document.getElementById("popup-form")
const addPopup = document.getElementById("add-popup")
const bookContainer = document.getElementById("books-container")

popupForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const titleVal = popupForm.querySelector('input[name="title"').value
  const authorVal = popupForm.querySelector('input[name="author"').value
  const pagesVal = popupForm.querySelector('input[name="pages"').value
  const readVal = popupForm.querySelector('input[name="read"]').checked
  const newBook = new Book(titleVal, authorVal, pagesVal, readVal, i)
  addBookToLibrary(newBook)
})

function Book(title, author, pages, read, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = id
}

function addBookToLibrary(newBook) {
  closePopup()
  myLibrary.push(newBook)
  createGridItem(newBook)
  i += 1
}

function createGridItem(newBook) {
  const template = document.createElement("div")
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const newReadBtn = document.createElement("button")
  const newRemoveBtn = document.createElement("button")

  template.classList.add("book")

  template.dataset.id = newBook.id
  bookContainer.appendChild(template)
  template.append(title)
  template.append(author)
  template.append(pages)
  template.append(newReadBtn)
  template.append(newRemoveBtn)

  title.innerHTML = newBook.title
  author.innerHTML = newBook.author
  pages.innerHTML = newBook.pages
  newReadBtn.innerHTML = newBook.read ? "Read" : "Not read"
  newReadBtn.className = newBook.read ? "read" : "notread"
  newRemoveBtn.innerHTML = "Remove"

  bookBtnHandler(newReadBtn, newRemoveBtn, newBook)
}

function bookBtnHandler(newReadBtn, newRemoveBtn, newBook) {
  newReadBtn.onclick = (e) => {
    if (newBook.read) {
      e.target.className = "notread"
      e.target.innerHTML = "Not read"
      newBook.read = false
    } else {
      e.target.className = "read"
      e.target.innerHTML = "Read"
      newBook.read = true
    }
  }
  newRemoveBtn.onclick = (e) => {
    myLibrary.splice(
      myLibrary.findIndex((item) => item.id === newBook.id),
      1
    )
    e.target.parentNode.remove()
  }
}

function openPopup() {
  popup.style.visibility = "visible"
}
function closePopup() {
  popup.style.visibility = "hidden"
  popupForm.reset()
}
