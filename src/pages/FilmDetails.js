import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function FilmDetails() {
  const { filmId } = useParams();  
  const [film, setFilm] = useState(null);

useEffect(() => {
  fetch(`http://localhost:5000/api/films/${filmId}`)
    .then(res => {
      if (!res.ok) {
        if (res.status === 404) {
          setFilm({ error: "Film not found" });
        } else {
          throw new Error("Failed to fetch film");
        }
        return;
      }
      return res.json();
    })
    .then(data => {
      if (data) setFilm(data);
    })
    .catch(err => {
      console.error(err);
      setFilm({ error: "Failed to load film details" });
    });
}, [filmId]);

  if (!film) return <div>Loading...</div>;
  
  if (film.error) {
    return (
      <div className="page-container">
        <h2>Error</h2>
        <p>{film.error}</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h2>{film.title}</h2>
      <p><strong>Description:</strong> {film.description}</p>
      <p><strong>Released:</strong> {film.release_year}</p>
      <p><strong>Rating:</strong> {film.rating}</p>
      <p><strong>Rental Rate:</strong> ${film.rental_rate}</p>
      <p><strong>Length:</strong> {film.length} minutes</p>
    </div>
  );
}

export default FilmDetails;
