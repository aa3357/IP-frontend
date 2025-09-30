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
    <div className="page-container">
      <h1>Top 5 Rented Films</h1>
      {films.length === 0 ? (
        <p>Loading films...</p>
      ) : (
        <ul>
          {films.map(film => (
            <li key={film.film_id}>
              <Link className="film-link" to={`/films/${film.film_id}`}>{film.title}</Link>
              <span style={{ marginLeft: "1rem", color: "#666" }}>
                ({film.rentals} rentals)
              </span>
            </li>
          ))}
        </ul>
      )}

      <h1>Top 5 Actors</h1>
      {actors.length === 0 ? (
        <p>Loading actors...</p>
      ) : (
        <ul>
          {actors.map(actor => (
            <li key={actor.actor_id}>
              <Link className="film-link" to={`/actors/${actor.actor_id}`}>{actor.name}</Link>
              <span style={{ marginLeft: "1rem", color: "#666" }}>
                ({actor.film_count} films)
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default LandingPage;
