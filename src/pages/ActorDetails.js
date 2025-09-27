import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ActorDetails() {
  const { actorId } = useParams();
  const [actorData, setActorData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/actors/${actorId}`)
      .then((res) => res.json())
      .then((data) => setActorData(data));
  }, [actorId]);

  if (!actorData) return <p>Loading...</p>;
  if (actorData.error) return <p>{actorData.error}</p>;

  return (
    <div>
      <h2>
        {actorData.actor.first_name} {actorData.actor.last_name}
      </h2>

      <h3>Top 5 Rented Films:</h3>
      <ul>
        {actorData.top_films.map((film) => (
          <li key={film.film_id}>
            <Link to={`/films/${film.film_id}`}>
              {film.title} ({film.rental_count} rentals)
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetails;
