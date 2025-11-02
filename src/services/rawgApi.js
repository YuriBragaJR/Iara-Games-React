import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=10`;

export const fetchGames = async (searchTerm = 'zelda') => {
  try {
    const response = await axios.get(`${BASE_URL}&search=${searchTerm}`);
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar jogos:', error);
    return [];
  }
};