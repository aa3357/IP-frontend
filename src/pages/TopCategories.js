import { useEffect, useState } from "react";

function TopCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories/top")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Top 5 Categories</h2>
      <ul>
        {categories.map((c, index) => (
          <li key={index}>
            {c.category} — {c.rental_count} rentals
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopCategories;
