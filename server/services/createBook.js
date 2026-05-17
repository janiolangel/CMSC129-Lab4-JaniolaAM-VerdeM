const books = require("../data/books")

const formatBookData = require("../utils/formatBookData")
const validateBookData = require("../utils/validateBookData")

function generateBookId() {
  return books.length + 1
}

function createBook(bookData) {
    const formattedBook = formatBookData(bookData)

    validateBookData(formattedBook)
  
    const newBook = { id: generateBookId(), ...formattedBook }

    books.push(newBook)
    return newBook
}

module.exports = createBook
