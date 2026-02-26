import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddTransactionPage from "./components/AddTransactionPage";
// src/main.jsx o App.jsx
import "./styles/variables.css";
import "./styles/layout.css";
import "./styles/dashboard.css";
import "./styles/addTransaction.css";
// import "./styles/auth.css";
import "./App.css";

function App() {
  // Verifichiamo se c'è un token salvato nel browser
  const [token, setToken] = useState(localStorage.getItem("userToken"));

  const handleLogin = (newToken) => {
    localStorage.setItem("userToken", newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav">
          <Link to="/">Dashboard</Link>
          <Link to="/nuova">Aggiungi Transazione</Link>
		  <Link>💰 My Financial Portfolio</Link>
		  <button onClick={handleLogout} className="logout-btn">
        </nav>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/nuova" element={<AddTransactionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
