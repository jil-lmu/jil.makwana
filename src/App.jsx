import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResponsivePortfolioComponent from "./ResponsivePortfolioComponent.jsx";
import ProjectDetails from "./ProjectDetails.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResponsivePortfolioComponent />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}
