const request = require("supertest")
const app = require("../../server/index")

describe("POST /books", () => {
    test("creates a new book", async () => {
        const response = await request(app).post("/books")
        .send({ title: "Spinning Silver", author: "Naomi Novik", readingStatus: "To Read", year: 2018})

        expect(response.statusCode).toBe(201)
        expect(response.body.title).toBe("Spinning Silver")
    })

    test("returns formatted book data", async () => {

        const response = await request(app).post("/books")
            .send({
                title: "  spinning silver ",
                author: " naomi novik ",
                readingStatus: "To Read",
                year: "2018"
            })

        expect(response.body.title).toBe("Spinning Silver")
        expect(response.body.author).toBe("Naomi Novik")
        expect(response.body.year).toBe(2018)
    })

    test("fails when title is missing", async () => {
        const response = await request(app).post("/books")
        .send({ author: "Naomi Novik", readingStatus: "To Read", year: 2018 })

        expect(response.statusCode).toBe(400)
        expect(response.body.error).toBe("Title is required")
    })

    test("fails when readingStatus is invalid", async () => {
        const response = await request(app).post("/books")
        .send({ title: "Spinning Silver", author: "Naomi Novik", readingStatus: "InvalidStatus", year: 2018 })

        expect(response.statusCode).toBe(400)
        expect(response.body.error).toBe("Invalid reading status")
    })
})