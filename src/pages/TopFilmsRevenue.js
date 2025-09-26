import { useEffect, useState } from "react";

function TopFilmsRevenue() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/films/revenue")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Top 5 Films by Revenue</h2>
      <ul>
        {films.map(film => (
          <li key={film.film_id}>
            {film.title}: ${Number(film.revenue).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopFilmsRevenue;
