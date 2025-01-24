// @ts-nocheck
import { useState, useEffect, useRef } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { setLanguage } from '../../redux/Slices/LanguageSlice';
import API_ENDPOINTS from '../../api/apiconfig';
 
const LanguageSelector = () => { 
    
    const dispatch = useDispatch(); 
    const selectedLanguage = useSelector((state) => state.language); 
    const [isOpen, setIsOpen] = useState(false); 
    const [languages, setLanguages] = useState([]); 
    const menuRef = useRef(null); 

    useEffect(() => { 
        const fetchLanguages = async () => { 
            try { 
                const response = await fetch(API_ENDPOINTS.GET_AvalibleLanguages); 
                const data = await response.json(); 
                setLanguages(data);
            } catch (error) { 
                console.error('Error loading languages:', error); 
            } 
        }; 
 
        fetchLanguages(); 
    }, []); 
 
    const handleSelect = (alpha2code) => { 
        dispatch(setLanguage(alpha2code)); 
        setIsOpen(false); 
    }; 
 
    useEffect(() => { 
        const handleClickOutside = (event) => { 
            if (menuRef.current && !menuRef.current.contains(event.target)) { 
                setIsOpen(false); 
            } 
        }; 
 
        document.addEventListener('mousedown', handleClickOutside); 
        return () => { 
            document.removeEventListener('mousedown', handleClickOutside); 
        }; 
    }, []); 
 
    const currentLanguageTitle = languages.find((lang) => lang.alpha2code === selectedLanguage)?.title || 'ENGLISH'; 
 
    return ( 
        <div className="relative inline-block text-left" ref={menuRef}> 
            <button 
                className="flex items-center justify-center px-4 h-[35px] bg-gray-700 text-white font-medium rounded-md shadow hover:bg-gray-600" 
                onClick={() => setIsOpen(!isOpen)} 
            > 
                {currentLanguageTitle.toUpperCase()} 
                <svg 
                    className={`w-4 h-4 ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                > 
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /> 
                </svg> 
            </button> 
 
            {isOpen && ( 
                <div className="absolute right-0 mt-2 w-36 bg-gray-700 text-white rounded-md shadow-lg z-20"> 
                    <ul className="py-1 text-white"> 
                        {languages.map((lang) => ( 
                            <li 
                                key={lang.alpha2code} 
                                className="px-4 py-2 hover:bg-gray-600 cursor-pointer" 
                                onClick={() => handleSelect(lang.alpha2code)} 
                            > 
                                {lang.title.toUpperCase()} 
                            </li> 
                        ))} 
                    </ul> 
                </div> 
            )} 
        </div> 
    ); 
}; 
 
export default LanguageSelector;