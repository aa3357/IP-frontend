import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function LandingPage() {
  const [films, setFilms] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/films/top")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(err => console.error(err));

    fetch("http://localhost:5000/api/actors/top")
      .then(res => res.json())
      .then(data => setActors(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Top 5 Rented Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>

      <h1>Top 5 Actors</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.actor_id}>
            <Link to={`/actors/${actor.actor_id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
