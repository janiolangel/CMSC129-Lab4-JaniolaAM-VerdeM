const express = require("express")

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

module.exports = router