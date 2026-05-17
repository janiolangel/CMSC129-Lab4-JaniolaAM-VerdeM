const request = require("supertest")
const app = require("../../server/index")

describe("POST /books", () => {
    test("creates a new book", async () => {
        const response = await request(app).post("/books")
        .send({ title: "Spinning Silver", author: "Naomi Novik", readingStatus: "To Read", year: 2018})

        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe("Spinning Silver")
    })
})