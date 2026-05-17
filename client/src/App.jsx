import { useState } from 'react'

const API = 'http://localhost:5000'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState('')
  const [status, setStatus] = useState('To Read')

  const addBook = async () => {
    const res = await fetch(`${API}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, author, year, readingStatus: status })
    })
    const book = await res.json()
    setBooks([...books, { ...book, newStatus: book.readingStatus }])
    setTitle('')
    setAuthor('')
    setYear('')
    setStatus('To Read')
  }

  const updateBook = async (id, newStatus) => {
    const res = await fetch(`${API}/books/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ readingStatus: newStatus })
    })
    const updated = await res.json()
    setBooks(books.map(b => b.id === id ? { ...updated, newStatus: updated.readingStatus } : b))
  }

  const deleteBook = async (id) => {
    await fetch(`${API}/books/${id}`, { method: 'DELETE' })
    setBooks(books.filter(b => b.id !== id))
  }

  return (
    <div>
      <h1>Reading List</h1>

      <div>
        <input
          data-testid="book-title-input"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          data-testid="book-author-input"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          data-testid="book-year-input"
          placeholder="Year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
        <select
          data-testid="book-status-select"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option>To Read</option>
          <option>Reading</option>
          <option>Done</option>
        </select>
        <button data-testid="add-book-btn" onClick={addBook}>
          Add Book
        </button>
      </div>

      <ul data-testid="book-list">
        {books.map(book => (
          <li key={book.id}>
            <span>{book.title} — {book.author} — {book.readingStatus}</span>
            <select
              data-testid="update-status-select"
              value={book.newStatus}
              onChange={e => setBooks(books.map(b => b.id === book.id ? { ...b, newStatus: e.target.value } : b))}
            >
              <option>To Read</option>
              <option>Reading</option>
              <option>Done</option>
            </select>
            <button
              data-testid="update-book-btn"
              onClick={() => updateBook(book.id, book.newStatus)}
            >
              Update
            </button>
            <button
              data-testid="delete-book-btn"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App