
const books = require("../data/books")
const validateBookData = require("../utils/validateBookData")

function updateBook(id, updates) {
  const index = books.findIndex(b => b.id === Number(id))
  if (index === -1) throw new Error("Book not found")

  const updatedBook = { ...books[index], ...updates }
  validateBookData(updatedBook)

  books[index] = updatedBook
  return updatedBook
}

module.exports = updateBook
