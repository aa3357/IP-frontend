import { useEffect, useState } from "react";

function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);

useEffect(() => {
  fetch(`http://localhost:5000/api/customers?page=${page}&limit=10`)
    .then(res => res.json())
    .then(data => {
      console.log("API Response:", data); // debug
      setCustomers(data.customers || []); // ✅ fallback to [] if undefined
    })
    .catch(err => console.error(err));
}, [page]);

  return (
    <div>
      <h2>Customers (Page {page})</h2>
        <ul>
          {customers.length > 0 ? (
            customers.map(c => (
              <li key={c.customer_id}>
                {c.first_name} {c.last_name} ({c.email})
              </li>
            ))
          ) : (
            <li>No customers found</li>
          )}
        </ul>
      <button onClick={() => setPage(p => Math.max(1, p - 1))}>Previous</button>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}

export default CustomersPage;
