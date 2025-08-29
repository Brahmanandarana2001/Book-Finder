const BookCard = ({ book }) => {
  // Validate book object
  if (!book || typeof book !== 'object') {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-5">
        <p className="text-gray-500">Invalid book data</p>
      </div>
    )
  }

  const { title, author_name, first_publish_year, subject, cover_i } = book

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-5">
        <h2 className="font-bold text-lg mb-2 line-clamp-2 h-14">
          {title || 'Untitled Book'}
        </h2>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Author:</span> {author_name ? author_name.join(', ') : 'Unknown'}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-medium">Published:</span> {first_publish_year || 'Unknown'}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-medium">Subjects:</span> {subject ? subject.slice(0, 3).join(', ') : 'Not available'}
        </p>
      </div>
      {cover_i && (
        <div className="bg-gray-200 h-64 flex items-center justify-center p-4">
          <img 
            src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
            alt={`Cover of ${title || 'book'}`}
            className="h-full object-contain shadow-md"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        </div>
      )}
    </div>
  )
}

export default BookCard
