import { useState } from 'react'

export const useBookSearch = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchBooks = async (query, searchType = 'title') => {
    if (!query.trim()) return
    
    setLoading(true)
    setError('')
    
    try {
      let apiUrl = ''
      if (searchType === 'title') {
        apiUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=20`
      } else if (searchType === 'author') {
        apiUrl = `https://openlibrary.org/search.json?author=${encodeURIComponent(query)}&limit=20`
      } else if (searchType === 'subject') {
        apiUrl = `https://openlibrary.org/search.json?subject=${encodeURIComponent(query)}&limit=20`
      }
      
      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      
      const data = await response.json()
      setBooks(data.docs || [])
    } catch (err) {
      setError('Error fetching books. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return { books, loading, error, searchBooks }
}