import React, { useEffect, useState } from "react";

function TopFilms() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/films/top5") // Flask endpoint
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }
        return res.json();
      })
      .then((data) => {
        setFilms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">🎥 Top 5 Rented Films</h2>
      <ul className="space-y-2">
        {films.map((film) => (
          <li
            key={film.film_id}
            className="border p-3 rounded-lg shadow-sm hover:shadow-md"
          >
            <p className="font-semibold">{film.title}</p>
            <p className="text-sm text-gray-600">
              Rented {film.rental_count} times
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopFilms;
