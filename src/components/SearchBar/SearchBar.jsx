import React from 'react';

const SearchBar = () => {
  return (
    <div className="mt-6 flex justify-center items-center">
      <input
        type="text"
        placeholder="Search Attractions"
        className="w-1/2 p-2 rounded-l-md border border-gray-300"
      />
      <button className="bg-orange-600 px-4 py-2 text-white rounded-r-md hover:bg-orange-500">
        Let's Go
      </button>
    </div>
  );
};

export default SearchBar;
