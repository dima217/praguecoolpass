// @ts-nocheck
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import API_ENDPOINTS from "../api/apiconfig";

export const Search = ({ search, searchNotFound, letsGo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.GET_Attractions);
        const data = await response.json();
        setAttractions(data);
      } catch (error) {
        console.error("Error loading attractions:", error);
      }
    };
    fetchAttractions();
  }, []);

  useEffect(() => {
    const filterResults = () => {
      if (!searchQuery.trim()) {
        setFilteredResults([]);
        return;
      }

      const query = searchQuery.toLowerCase().trim();
      
      const results = attractions.filter((attraction) => {
        const content = attraction?.content?.[selectedLanguage] || attraction?.content?.en || {};
        const title = content?.title?.toLowerCase() || '';
        return title.includes(query);
      });

      setFilteredResults(results);
    };

    filterResults();
  }, [searchQuery, selectedLanguage, attractions]);

  const showResults = searchQuery && filteredResults.length > 0;
  const showNotFound = searchQuery && filteredResults.length === 0;

  return (
    <div className="flex flex-col md:flex-row items-center mt-[20px] container relative">
      <div className="flex items-center justify-start relative w-full md:w-[270px]">
        <label className="w-full">
          <div className="autocomplete relative">
            <div className="rounded-[5px]">
              <div className="max-md:w-full">
                <input
                  placeholder={search}
                  type="text"
                  autoComplete="off"
                  className="border w-full rounded-[5px] text-sm color-bg h-[37px] indent-[12px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <input type="hidden" />
              </div>
            </div>

            {showResults && (
              <ul className="autocomplete__results absolute top-full left-0 right-0 bg-white border rounded-[5px] mt-1 max-h-[200px] overflow-y-auto z-50 shadow-md">
                {filteredResults.map((attraction) => {
                  const content = attraction?.content?.[selectedLanguage] || attraction?.content?.en || {};
                  return (
                    <li
                      key={attraction._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {content.title || ''}
                    </li>
                  );
                })}
              </ul>
            )}

            {showNotFound && (
              <div className="autocomplete__results absolute top-full left-0 right-0 bg-white border rounded-[5px] mt-1 p-4 text-center text-gray-500 text-sm">
                {searchNotFound}
              </div>
            )}
          </div>
        </label>

        <div className="absolute w-[20px] h-[20px] cursor-pointer right-[18px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="#DBDBDB"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 17.5L13.875 13.875"
              stroke="#DBDBDB"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <Button className="max-md:mt-[12px] md:ml-[21px] md:px-[20px] h-[37px] bg-primary text-white max-md:w-full">
        {letsGo}
      </Button>
    </div>
  );
};