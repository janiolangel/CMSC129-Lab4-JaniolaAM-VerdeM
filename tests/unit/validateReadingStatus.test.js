const validateReadingStatus = require("../../server/utils/validateReadingStatus")

describe("validateReadingStatus", () => {
    test("returns true for 'To Read'", () => {
        expect(validateReadingStatus("To Read")).toBe(true)
    })
    
    test("returns true for 'Currently Reading'", () => {
        expect(validateReadingStatus("Currently Reading")).toBe(true)
    })

    test("returns true for 'Completed'", () => {
        expect(validateReadingStatus("Completed")).toBe(true)
    })

    test("returns true for 'Dropped'", () => {
        expect(validateReadingStatus("Dropped")).toBe(true)
    })

    test("returns false for invalid reading status", () => {
        expect(validateReadingStatus("On Hold")).toBe(false)
        expect(validateReadingStatus("")).toBe(false)
    })
})
