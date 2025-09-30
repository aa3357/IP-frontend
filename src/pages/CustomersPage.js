import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomersPage() {

  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({ id: "", first_name: "", last_name: "" });
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    try {
      const query = new URLSearchParams({
        page,
        per_page: 10,
        ...filters,
      }).toString();

      const res = await fetch(`http://localhost:5000/api/customers?${query}`);
      if (res.ok) {
        const data = await res.json();
        setCustomers(data);
      } else {
        console.error("Failed to fetch customers");
        setCustomers([]);
      }
    } catch (err) {
      console.error(err);
      setCustomers([]);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, [page, filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    setPage(1);
  };

  return (
    <div className="page-container">
      <h2>Customers</h2>

      {/* Filter form */}
      <div>
        <input
          type="text"
          name="id"
          placeholder="Customer ID"
          value={filters.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={filters.first_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={filters.last_name}
          onChange={handleChange}
        />
      </div>

      {/* Button to go to add page */}
      <button onClick={() => navigate("/customers/add")}>
        Add Customer
      </button>

      {/* List of customers */}
      <ul>
        {customers.map((c) => (
          <li key={c.customer_id}>
            {c.customer_id} - {c.first_name} {c.last_name} ({c.email})
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default CustomersPage;
