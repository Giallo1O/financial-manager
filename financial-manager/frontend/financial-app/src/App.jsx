import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import AuthPage from "./components/AuthPage";
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
    <div className="app-container">
      {!token ? (
        <AuthPage onLoginSuccess={handleLogin} />
      ) : (
        <>
          <header className="main-header">
            <h1>💰 My Financial Portfolio</h1>
            <button onClick={handleLogout} className="logout-btn">
              Esci
            </button>
          </header>
          <main>
            <Dashboard />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
