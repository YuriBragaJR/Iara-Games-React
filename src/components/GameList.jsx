import { useEffect, useState } from 'react';
import { fetchGames } from '../services/rawgApi';


export default function GameList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames().then(setGames);
  }, []);

  return (
<div className="game-list container">
  <h3 className="mb-5">Confira jogos que inspiraram a Iara Silva</h3>
  <div className="row">
    {games.map((game) => (
      <div key={game.id} className="col-md-4 mb-4">
        <div className="card h-100 shadow">
          {game.background_image && (
            <img
              src={game.background_image}
              alt={game.name}
              className="card-img-top"
              style={{ height: '200px', objectFit: 'cover' }}
            />
          )}
          <div className="card-body">
            <h5 className="card-title">{game.name}</h5>
            <p className="card-text"><i class="bi bi-calendar-check"></i> Lançamento: {game.released}</p>
            <p className="card-text"><i class="bi bi-star-fill text-warning"></i> Avaliação: {game.rating}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}