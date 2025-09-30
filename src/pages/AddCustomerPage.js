import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCustomerPage() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      alert("Please fill in all required fields");
      return;
    }
    
    if (!email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    
    try {
      const res = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          email: email.trim(),
          address_id: 1,
        }),
      });

      if (res.ok) {
        alert("Customer added successfully!");
        navigate("/customers");
      } else {
        const errorData = await res.json();
        alert(`Failed to add customer: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return ( //hhaha
    <div className="page-container">
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
