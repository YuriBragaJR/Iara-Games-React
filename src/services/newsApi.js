import axios from 'axios';

const API_KEY = '504a4441eb3cd24a2b2f66fffbef9e9e'; // substitua pela sua chave
const BASE_URL = 'https://gnews.io/api/v4/search?q=games&lang=pt&token=' + API_KEY;

export const fetchGameNews = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.articles;
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return [];
  }
};