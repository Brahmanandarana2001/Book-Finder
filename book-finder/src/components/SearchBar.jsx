const SearchBar = ({ query, setQuery, searchType, setSearchType, onSearch, loading }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
        className="p-3 rounded-md border border-gray-300 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="subject">Subject</option>
      </select>
      <button
        onClick={onSearch}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  )
}

export default SearchBar
