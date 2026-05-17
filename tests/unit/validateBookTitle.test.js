const validateBookTitle = require("../../server/utils/validateBookTitle")

describe("validateBookTitle", () => {

  test("returns false for empty string", () => {
    expect(validateBookTitle("")).toBe(false)
  })

  test("returns false for whitespace-only title", () => {
    expect(validateBookTitle("   ")).toBe(false)
  })

  test("returns false for titles longer than 500 characters", () => {
    expect(validateBookTitle("A".repeat(501))).toBe(false)
  })

  test("returns true for valid book titles", () => {
    expect(validateBookTitle("Spinning Silver")).toBe(true)
  })

})