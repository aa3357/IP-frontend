import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css"; 

import LandingPage from "./pages/LandingPage";
import FilmDetails from "./pages/FilmDetails";
import CustomersPage from "./pages/CustomersPage";
import ActorDetails from "./pages/ActorDetails";
import AddCustomerPage from "./pages/AddCustomerPage"; 

function App() {
  return (
    <Router>
      <header className="app-header">
        <h1>Ash Video Rental Store</h1>
      </header>
      <hr />
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/films/:filmId" element={<FilmDetails />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/actors/:actorId" element={<ActorDetails />} />
        <Route path="/customers/add" element={<AddCustomerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
