import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Countries from "./pages/Countries";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/countries">Countries</Link>
      </nav>
      <Routes>
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </Router>
  );
};

export default App;
