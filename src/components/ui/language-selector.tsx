// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
                className="flex justify-between items-center w-full rounded bg-bg px-[20px] h-[35px] rounded-[5px] text-left text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {currentLanguageTitle.toUpperCase()}
                <span className="ml-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="7"
                        height="5"
                        viewBox="0 0 7 5"
                        fill="none"
                    >
                        <path
                            d="M3.5 5L0.0358978 0.500001L6.9641 0.5L3.5 5Z"
                            fill="white"
                        />
                    </svg>
                </span>
            </button>
 
            {isOpen && ( 
               <div className="absolute mt-2 rounded-[5px] bg-bg w-[110%] right-0">
                    <ul className="py-1 text-white"> 
                        {languages.map((lang) => ( 
                            <li 
                                key={lang.alpha2code} 
                                className="text-sm text-white pl-[12px] py-[5px] cursor-pointer" 
                                onClick={() => handleSelect(lang.alpha2code)} 
                            > 
                                {lang.title} 
                            </li> 
                        ))} 
                    </ul> 
                </div> 
            )} 
        </div> 
    ); 
}; 
 
export default LanguageSelector;