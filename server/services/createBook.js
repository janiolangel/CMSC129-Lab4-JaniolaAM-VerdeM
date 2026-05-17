const books = require("../data/books")

const formatBookData = require("../utils/formatBookData")
const validateBookTitle = require("../utils/validateBookTitle")
const validateReadingStatus = require("../utils/validateReadingStatus")

function createBook(bookData) {
    const formattedBook = formatBookData(bookData)
    
    if (!validateBookTitle(formattedBook.title)) {
        throw new Error("Title is required")
    }

    if (!validateReadingStatus(formattedBook.readingStatus)) {
        throw new Error("Invalid reading status")
    }
  
    const newBook = { id: books.length + 1, ...formattedBook }

    books.push(newBook)
    return newBook
}

module.exports = createBook
