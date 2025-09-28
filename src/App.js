import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FilmDetails from "./pages/FilmDetails";
import TopCategories from "./pages/TopCategories";
import TopCustomers from "./pages/TopCustomers";
import TopFilmsRevenue from "./pages/TopFilmsRevenue";
import CustomersPage from "./pages/CustomersPage";
import ActorDetails from "./pages/ActorDetails";
import AddCustomerPage from "./pages/AddCustomerPage"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Feature 1: Landing page with Top 5 Films */}
        <Route path="/" element={<LandingPage />} />

        {/* Feature 2: Film Details page */}
        <Route path="/films/:filmId" element={<FilmDetails />} />
        {/* Feature 3: Top Categories page */}
        <Route path="/categories" element={<TopCategories />} />
        {/* Feature 4: Top Customers page */}
        <Route path="/top_customers" element={<TopCustomers />} />
        {/* Feature 5: Top Films by Revenue page */}
        <Route path="/films/revenue" element={<TopFilmsRevenue />} />
        {/* Feature 6: Customer List page */}
        <Route path="/customers" element={<CustomersPage />} />
        {/* Feature 7: Actor Details page */}
        <Route path="/actors/:actorId" element={<ActorDetails />} />
        {/* Feature 8: Add Customer page */}
        <Route path="/customers/add" element={<AddCustomerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
