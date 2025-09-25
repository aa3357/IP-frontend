import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/films/top")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top 5 Rented Films</h2>
      <ul>
        {films.map(film => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
