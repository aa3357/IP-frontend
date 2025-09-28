import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCustomerPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          address_id: 1, // static default
        }),
      });

      if (res.ok) {
        alert("Customer added successfully!");
        navigate("/customers"); // redirect back
      } else {
        console.error("Failed to add customer");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/customers")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddCustomerPage;
