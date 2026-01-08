// src/services/api.js
import axios from "axios";

// In sviluppo con il proxy di Vite, questo punterà a http://localhost:8080/api
const API_BASE_URL = "/api";

// ==========================================
// MOCK DATA (Dati Finti per lo sviluppo FE)
// ==========================================

// Dati previsti per il grafico a torta: array di oggetti { name, value }
const MOCK_PIE_DATA = [
  { name: "Affitto/Mutuo", value: 800.0 },
  { name: "Alimentari", value: 450.5 },
  { name: "Ristoranti & Svago", value: 320.0 },
  { name: "Trasporti", value: 150.0 },
  { name: "Bollette", value: 210.2 },
  { name: "Shopping", value: 95.0 },
];

// Dati previsti per la tabella top 5: array di oggetti { category, amount } ordinati per amount decrescente
const MOCK_TOP5_DATA = [
  { category: "Affitto/Mutuo", amount: 800.0 },
  { category: "Alimentari", amount: 450.5 },
  { category: "Ristoranti & Svago", amount: 320.0 },
  { category: "Bollette", amount: 210.2 },
  { category: "Trasporti", amount: 150.0 },
];

// Funzione helper per simulare ritardo di rete
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// CHIAMATE API SIMULATE
// Quando avrai il BE pronto, toglierai il commento alla chiamata axios vera e rimuoverai i mock data

export const getMonthlyExpenseDistribution = async () => {
  // Simulazione:
  await delay(500); // Aspetta mezzo secondo
  return { data: MOCK_PIE_DATA };

  // Quando il BE è pronto, userai questo:
  // return axios.get(`${API_BASE_URL}/expenses/monthly-distribution`);
};

export const getTop5Categories = async () => {
  // Simulazione:
  await delay(500);
  return { data: MOCK_TOP5_DATA };

  // Quando il BE è pronto, userai questo:
  // return axios.get(`${API_BASE_URL}/expenses/top-categories?limit=5`);
};

// Aggiungi a src/services/api.js

export const loginRequest = async (email, password) => {
  await delay(800);
  // Simulazione: accetta qualsiasi login con password "password123"
  if (password === "password123") {
    return {
      data: { token: "fake-jwt-token", user: { email, name: "Utente" } },
    };
  }
  throw new Error("Credenziali errate");
};

export const registerRequest = async (userData) => {
  await delay(800);
  return { data: { message: "Registrazione completata!" } };
};
