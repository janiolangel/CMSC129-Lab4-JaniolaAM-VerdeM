const books = require("../data/books")

function deleteBook(id) {
  const index = books.findIndex(b => b.id === Number(id))
  if (index === -1) throw new Error("Book not found")

  const deletedBook = books.splice(index, 1)[0]
  return { message: "Book deleted", book: deletedBook}
}

module.exports = deleteBook