import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  return (
    <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-md shadow-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border-none outline-none w-full text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="text-white bg-[#6A89A7] px-3 py-1 rounded-md flex items-center"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="hidden md:inline ml-1">Search</span>
      </button>
    </div>
  );
};

export default Search;
