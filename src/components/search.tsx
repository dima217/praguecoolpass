// @ts-nocheck
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import API_ENDPOINTS from "../api/apiconfig";
import { toTitleCase } from "../additionalFunctions/customFunctions";

{/*Attractions search*/}

export const Search = ({ search, searchNotFound, letsGo }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.GET_Attractions);
        const data = await response.json();
        const formattedData = data.map(item => ({
          id: item._id,
          name: toTitleCase(item.content?.[selectedLanguage]?.title || item.content?.en?.title || ""),
          path: `/attractions/${item.slug}`
        }));
        setAttractions(formattedData);
      } catch (error) {
        console.error("Error loading attractions:", error);
      }
    };
    fetchAttractions();
  }, [selectedLanguage]);

  useEffect(() => {
    const filterResults = () => {
      if (!searchQuery.trim()) {
        setFilteredResults([]);
        return;
      }

      const results = attractions.filter(attraction => 
        attraction.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setFilteredResults(results);
    };

    filterResults();
  }, [searchQuery, attractions]);

  const handleSelect = (attraction) => {
    setSelectedAttraction(attraction);
    setSearchQuery(attraction.name);
    setIsFocused(false);
    setError(false);
  };

  const handleSearch = () => {
    console.log('Ddd');
    if (searchQuery.trim() === '') {
      setError(true);
      setIsFocused(true);
      return;
    }
    if (selectedAttraction) {
      navigate(selectedAttraction.path);
    } else {
      setError(true);
    }
  };

  const showResults = isFocused && searchQuery && filteredResults.length > 0;
  const showNotFound = (isFocused && searchQuery && filteredResults.length === 0) || error;

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
                  onChange={(e) => {
                    setSearchQuery(toTitleCase(e.target.value));
                    setSelectedAttraction(null);
                    setError(false);
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                />
                <input type="hidden" />
              </div>
            </div>

          {/*Search results*/}
            {showResults && (
              <ul className="autocomplete__results absolute top-full left-0 right-0 bg-white border rounded-[5px] mt-1 max-h-[200px] overflow-y-auto z-50 shadow-md">
                {filteredResults.map((attraction) => (
                  <li
                    key={attraction.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onMouseDown={() => handleSelect(attraction)}
                  >
                    {attraction.name}
                  </li>
                ))}
              </ul>
            )}

            {showNotFound && (
              <div className="autocomplete__results absolute top-full left-0 right-0 bg-white border rounded-[5px] mt-1 p-4 text-center text-gray-500 text-sm">
                {error && searchQuery.trim() === '' 
                  ? "Please enter search query" 
                  : searchNotFound}
              </div>
            )}
          </div>
        </label>

     {/*svg-search image*/}
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

      <Button 
        className="font-semibold max-md:mt-[12px] md:ml-[21px] md:px-[20px] h-[37px] bg-primary text-white max-md:w-full"
        onClick={handleSearch}
      >
        {letsGo}
      </Button>
    </div>
  );
};