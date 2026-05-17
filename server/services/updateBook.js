const books = require("../data/books")
const validateBookData = require("../utils/validateBookData")

function updateBook(id, updates) {
  const book = books.find(b => b.id === Number(id))
  if (!book) throw new Error("Book not found")

  const updatedBook = { ...book, ...updates }
  validateBookData(updatedBook)

  Object.assign(book, updatedBook)
  return book
}

module.exports = updateBook
