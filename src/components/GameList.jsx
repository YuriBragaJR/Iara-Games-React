import { useEffect, useState } from 'react';
import { fetchGames } from '../services/rawgApi';

export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
    <div className="game-list">
      <h2>Jogos que inspiraram a Iara Silva</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            {game.background_image && (
              <img src={game.background_image} alt={game.name} width="300" />
            )}
            <p>📅 Lançamento: {game.released}</p>
            <p>⭐ Avaliação: {game.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}