import axios from 'axios';

const API_URL = 'https://api2.praguecoolpass.com'; 

export const fetchLanguages = async () => {
  try {
    const response = await axios.get(`${API_URL}/languages/active`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching languages:', error);
    throw error;
  }
};