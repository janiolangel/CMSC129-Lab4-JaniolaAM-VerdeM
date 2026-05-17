const express = require("express")
const books = require("../data/books")

const router = express.Router()
const createBook = require("../services/createBook")

router.post("/", (req, res) => {
    try {
        const newBook = createBook(req.body)
        res.status(201).json(newBook)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get("/", (req, res) => {
    res.status(200).json(books)
})

module.exports = router