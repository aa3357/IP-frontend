import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ActorDetails() {
  
  const { actorId } = useParams();
  const [actorData, setActorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/actors/${actorId}`)
      .then((res) => res.ok ? res.json() : { error: "Could not load actor" })
      .then((data) => setActorData(data))
      .catch(() => setActorData({ error: "Could not load actor" }))
      .finally(() => setLoading(false));
  }, [actorId]);

  if (loading) return <div className="page-container">Loading actor...</div>;
  if (!actorData || actorData.error) return <div className="page-container">Could not load actor.</div>;

  return (
    <div className="page-container">
      <h2>
        {actorData.actor.first_name} {actorData.actor.last_name}
      </h2>

      <h3>Top 5 Rented Films</h3>
      {actorData.top_films.length === 0 ? (
        <p>No films found for this actor.</p>
      ) : (
        <ul>
          {actorData.top_films.map((film) => (
            <li key={film.film_id}>
              <Link className="film-link" to={`/films/${film.film_id}`}>
                {film.title} ({film.rental_count} rentals)
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActorDetails;
