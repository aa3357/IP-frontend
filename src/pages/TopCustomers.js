import { useEffect, useState } from "react";

function TopCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/customers/top")
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Top 5 Customers</h2>
      <ul>
        {customers.map((c) => (
          <li key={c.customer_id}>
            {c.first_name} {c.last_name} — {c.rental_count} rentals
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopCustomers;
