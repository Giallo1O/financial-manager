import React, { useState } from "react";
import { loginRequest, registerRequest } from "../services/api";
import { LogIn, UserPlus, Mail, Lock, User } from "lucide-react";

const AuthPage = ({ onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        const res = await loginRequest(formData.email, formData.password);
        onLoginSuccess(res.data.token);
      } else {
        await registerRequest(formData);
        alert("Registrazione effettuata! Ora puoi accedere.");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message || "Si è verificato un errore");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>💰 FinanceApp</h1>
          <p>
            {isLogin
              ? "Bentornato! Accedi al tuo portafoglio"
              : "Crea un account gratuito"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-group">
              <User size={18} />
              <input
                type="text"
                placeholder="Nome Completo"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          )}
          <div className="input-group">
            <Mail size={18} />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <Lock size={18} />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit">
            {isLogin ? (
              <>
                <LogIn size={18} /> Accedi
              </>
            ) : (
              <>
                <UserPlus size={18} /> Registrati
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Non hai un account? Registrati"
              : "Hai già un account? Accedi"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
