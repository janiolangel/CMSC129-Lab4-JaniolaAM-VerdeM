const validateBookTitle = require("./validateBookTitle")
const validateReadingStatus = require("./validateReadingStatus")

function validateBookData(book) {
    if (!validateBookTitle(book?.title)) {
        throw new Error("Title is required")
    }
    
    if (!validateReadingStatus(book?.readingStatus)) {
        throw new Error("Invalid reading status")
    }
}

module.exports = validateBookData
