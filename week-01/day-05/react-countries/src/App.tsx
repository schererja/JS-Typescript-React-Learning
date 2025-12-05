import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Countries from "./pages/countries";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Countries</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
};

export default App;
