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

    test("GET /books returns all books", async () => {
        await request(app).post("/books")
        .send({
            title: "Spinning Silver",
            author: "Naomi Novik",
            readingStatus: "To Read",
            year: 2018
        })

        const response = await request(app).get("/books")
        expect(response.statusCode).toBe(200)
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body.length).toBeGreaterThan(0)
        expect(response.body[0].title).toBe("Spinning Silver")
    })

      test("updates title and readingStatus", async () => {
    const created = await request(app).post("/books").send({
      title: "Spinning Silver",
      author: "Naomi Novik",
      readingStatus: "To Read",
      year: 2018
    })

    const response = await request(app).put(`/books/${created.body.id}`).send({
      title: "Updated Silver",
      readingStatus: "Completed"
    })

    expect(response.statusCode).toBe(200)
    expect(response.body.title).toBe("Updated Silver")
    expect(response.body.readingStatus).toBe("Completed")
  })
  
  test("updates author and year", async () => {
    const created = await request(app).post("/books").send({
        title: "Spinning Silver",
        author: "Naomi Novik",
        readingStatus: "To Read",
        year: 2018
    })

    const response = await request(app).put(`/books/${created.body.id}`).send({
        author: "N. Novik",
        year: 2019
    })

    expect(response.statusCode).toBe(200)
    expect(response.body.author).toBe("N. Novik")
    expect(response.body.year).toBe(2019)
  })

  test("DELETE /books/:id removes a book", async () => {
    const created = await request(app).post("/books").send({
        title: "Spinning Silver",
        author: "Naomi Novik",
        readingStatus: "To Read",
        year: 2018
    })

    const response = await request(app).delete(`/books/${created.body.id}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe("Book deleted")

    const getResponse = await request(app).get("/books")
    expect(getResponse.body.find(b => b.id === created.body.id)).toBeUndefined()
  })
})