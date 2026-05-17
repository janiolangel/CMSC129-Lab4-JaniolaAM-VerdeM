const books = require("../data/books")

function deleteBook(id) {
  const index = books.findIndex(b => b.id === Number(id))
  if (index === -1) throw new Error("Book not found")

  books.splice(index, 1)
  return { message: "Book deleted" }
}

module.exports = deleteBook