import React, { useState, useEffect } from 'react';
import { fetchLanguages } from './api'; 

const LanguageDropdown = () => {
  const [languages, setLanguages] = useState([]); 
  const [selectedLanguage, setSelectedLanguage] = useState(null); 
  const [isOpen, setIsOpen] = useState(false); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadLanguages = async () => {
      try {
        const data = await fetchLanguages();
        setLanguages(data); 

        const defaultLanguage = data.find((lang) => lang.alpha2code === 'en');
        setSelectedLanguage(defaultLanguage);

        setLoading(false); 
      } catch (error) {
        setError(error.message);
        setLoading(false); 
      }
    };

    loadLanguages();
  }, []); 

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language); 
    setIsOpen(false); 
  };

  return (
    <div className="relative mt-6 flex justify-center">
      {/* Кнопка для отображения выбранного языка */}
      <button
        onClick={() => setIsOpen(!isOpen)} 
        className="bg-orange-600 px-4 py-2 text-white rounded-md hover:bg-orange-500 flex items-center"
      >
        {selectedLanguage}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Выпадающий список */}
      {isOpen && (
        <div className="absolute top-12 bg-white border border-gray-300 rounded-md shadow-lg w-48 z-10">
          {languages.map((language) => (
            <div
              key={language._id}
              onClick={() => handleLanguageSelect(language)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {language.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;