import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FilmDetails from "./pages/FilmDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Feature 1: Landing page with Top 5 Films */}
        <Route path="/" element={<LandingPage />} />

        {/* Feature 2: Film Details page */}
        <Route path="/films/:filmId" element={<FilmDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
