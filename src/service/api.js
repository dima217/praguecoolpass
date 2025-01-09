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

export const fetchImages = async () => {
    try {
      // Массив URL-адресов для запросов
      const urls = [
        `${API_URL}/languages/active`,
        `${API_URL}/languages/active`,
        `${API_URL}/languages/active`,
        `${API_URL}/languages/active`
      ];
  
      // Выполняем все запросы параллельно
      const responses = await axios.all(urls.map(url => axios.get(url)));
  
      // Извлекаем данные из каждого ответа
      const images = responses.map(response => response.data.url); // Предполагаем, что API возвращает объект с полем `url`
      return images; // Возвращаем массив URL-адресов картинок
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
      return []; // В случае ошибки возвращаем пустой массив
    }
  };