export const API_BASE_URL = 'https://api2.praguecoolpass.com';
export const API_PICTURES_URL = 'https://static2.praguecoolpass.com'

const API_ENDPOINTS = {
    GET_Attractions: `${API_BASE_URL}/object/attraction`,
    GET_TopAttractions: `${API_BASE_URL}/object/attraction/top-attractions`,
    GET_MainPageCohtent: `${API_BASE_URL}/pages/5fd771cc072e5479bdedøf2b`,
    GET_Translatoin: `${API_BASE_URL}/translation`,
    GET_MenuItems: `${API_BASE_URL}/menu`, 
    GET_AvalibleLanguages: `${API_BASE_URL}/languages/active`, 
    GET_Cards: `${API_BASE_URL}/cardCategories?eshopId=77a85a2a-6b84-4d79-b856-dfafc14340a0`, 
    GET_News: `${API_BASE_URL}/news`, 
    GET_ReveiwsAprowed: `${API_BASE_URL}/review/card`
}

export default API_ENDPOINTS;