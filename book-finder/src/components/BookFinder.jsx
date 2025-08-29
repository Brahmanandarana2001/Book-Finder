import { useState } from 'react'
import { useBookSearch } from '../hooks/useBookSearch'
import SearchBar from './SearchBar'
import BooksGrid from './BooksGrid'

const BookFinder = () => {
  const [query, setQuery] = useState('')
  const [searchType, setSearchType] = useState('title')
  const { books, loading, error, searchBooks } = useBookSearch()

  const handleSearch = () => {
    if (!query.trim()) return
    searchBooks(query, searchType)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-800 mb-2">Book Finder</h1>
          <p className="text-gray-600">Discover books by title, author, or subject</p>
        </header>

        <SearchBar
          query={query}
          setQuery={setQuery}
          searchType={searchType}
          setSearchType={setSearchType}
          onSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <BooksGrid books={books} loading={loading} query={query} />
      </div>

      <footer className="mt-16 text-center text-gray-500">
        <p>Powered by Open Library API</p>
      </footer>
    </div>
  )
}

export default BookFinder
