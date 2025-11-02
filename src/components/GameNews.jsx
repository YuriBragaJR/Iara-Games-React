import { useEffect, useState } from 'react';
import { fetchGameNews } from '../services/newsApi';



function GameNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchGameNews().then(setNews); // chamada inicial

    const interval = setInterval(() => {
      fetchGameNews().then(setNews); // atualiza a cada 60s
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
  <div>
    <h3 class="mb-4">Últimas Notícias de Jogos</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {news.map((item, index) => (
        <li key={index} style={{ marginBottom: '20px' }}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <h5>{item.title}</h5>
            {item.image && (
              <img class="mb-5"
                src={item.image}
                alt={item.title}
                style={{ maxWidth: '50%', height: 'auto', borderRadius: '8px' }}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
}

export default GameNews;