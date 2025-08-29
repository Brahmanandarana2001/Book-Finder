import BookCard from './BookCard'

const BooksGrid = ({ books, loading, query }) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">⏳</div>
        <p className="text-gray-500 text-xl">Searching for books...</p>
      </div>
    )
  }

  if (books && books.length > 0) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Search Results ({books.length} books found)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.filter(Boolean).map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
    )
  }

  if (query && !loading) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-6xl mb-4">📚</div>
        <p className="text-gray-500 text-xl">No books found. Try a different search term.</p>
      </div>
    )
  }

  return (
    <div className="text-center py-12">
      <div className="text-gray-400 text-6xl mb-4">🔍</div>
      <p className="text-gray-500 text-xl">Enter a search term to find books</p>
    </div>
  )
}

export default BooksGrid
