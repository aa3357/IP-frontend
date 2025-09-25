import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FilmDetails from "./pages/FilmDetails";
import TopCategories from "./pages/TopCategories";
import TopCustomers from "./pages/TopCustomers";

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
        
      </Routes>
    </Router>
  );
}

export default App;
