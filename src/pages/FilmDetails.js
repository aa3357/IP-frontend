import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function FilmDetails() {
  const { filmId } = useParams();  // must match :filmId in Route
  const [film, setFilm] = useState(null);

useEffect(() => {
  fetch(`http://localhost:5000/api/films/${filmId}`)
    .then(res => {
      if (!res.ok) throw new Error("Film not found");
      return res.json();
    })
    .then(data => setFilm(data))
    .catch(err => console.error(err));
}, [filmId]);

  if (!film) return <div>Loading...</div>;

  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>Released: {film.release_year}</p>
      <p>Rating: {film.rating}</p>
    </div>
  );
}

export default FilmDetails;
