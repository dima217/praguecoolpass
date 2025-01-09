import React from 'react';

const SearchBar = () => {
  return (
    <div className="mt-6 flex">
      <input
        type="text"
        placeholder="Search Attractions"
        className="w-[270px] h-[35px] p-2 mr-4 rounded-md border border-gray-300"
      />
      <button className="bg-orange-600 h-[35px] px-4 py-2 text-white rounded-md hover:bg-orange-500 flex items-center justify-center">
        LET'S GO
      </button>
    </div>
  );
};

export default SearchBar;
