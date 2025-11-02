import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api/games';

export const fetchGames = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        page_size: 10,
        ordering: '-rating',
        dates: '1980-01-01,1999-12-31', // jogos lançados antes de 2000
        platforms: '27,18,19,21', // PS1, SNES, NES, Sega Genesis
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar jogos antigos:', error);
    return [];
  }
};