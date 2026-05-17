const express = require("express")
const books = require("../data/books")

const router = express.Router()
const createBook = require("../services/createBook")
const getBooks = require("../services/getBooks")
const updateBook = require("../services/updateBook")
const deleteBook = require("../services/deleteBook")

router.post("/", (req, res) => {
    try {
        const newBook = createBook(req.body)
        res.status(201).json(newBook)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.get("/", (req, res) => {
    try {
        res.status(200).json(getBooks())
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.put("/:id", (req, res) => {
    try {
        const updatedBook = updateBook(req.params.id, req.body)
        res.status(200).json(updatedBook)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

router.delete("/:id", (req, res) => {
    try {
        const result = deleteBook(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
})



module.exports = router