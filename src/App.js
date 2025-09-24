import React, { useEffect, useState } from "react";


function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/top-films")
      .then(res => res.json())
      .then(data => setFilms(data))
      .catch(console.error);
  }, []);

  return (
      <div>
        <h1>Top 5 Films</h1>
        <ul>
          {films.map(f => (
            <li key={f.film_id}>{f.title}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
