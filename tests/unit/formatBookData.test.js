const formatBookData = require("../../server/utils/formatBookData")

    describe("formatBookData", () => {
        test("trims whitespace from book title", () => {
            const book = {title: "  spinning silver  ", author: "Naomi Novik", readingStatus: "To Read", year: "2018"}
            
            const formattedBook = formatBookData(book)
            expect(formattedBook.title).toBe("Spinning Silver")
        })
    
        test("trims whitespace from author name", () => {
            const book = {title: "Spinning Silver", author: "  naomi novik  ", readingStatus: "To Read", year: "2018"}
            
            const formattedBook = formatBookData(book)
            expect(formattedBook.author).toBe("Naomi Novik")
        })

        test("converts year into a number", () => {
            const book = {title: "Spinning Silver", author: "Naomi Novik", readingStatus: "To Read", year: "2018"}

            const formattedBook = formatBookData(book)
            expect(formattedBook.year).toBe(2018)
        })

        test("throws error if title is missing", () => {
            const book = {author: "Naomi Novik", readingStatus: "To Read", year: "2018"}
            expect(() => formatBookData(book)).toThrow("Title is required")
        })
})