// Converts a string to title case by trimming whitespace and capitalizing each word
function toTitleCase(str) {
  return str
    .trim()
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

function formatBookData(book) {
  if (!book.title || book.title.trim() === "") {
    throw new Error("Title is required")
  }

  return {
    ...book,
    title: toTitleCase(book.title),
    author: book.author ? toTitleCase(book.author) : book.author,
    year: book.year !== undefined ? Number(book.year) : book.year
  }
}

module.exports = formatBookData