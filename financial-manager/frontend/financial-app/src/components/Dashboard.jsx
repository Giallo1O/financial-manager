// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";
import ExpensePieChart from "./ExpensePieChart";
import TopExpensesTable from "./TopExpensesTable";
import {
  getMonthlyExpenseDistribution,
  getTop5Categories,
} from "../services/api";
import { Loader2, AlertCircle } from "lucide-react"; // Icone opzionali

const Dashboard = () => {
  const [pieData, setPieData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Eseguiamo le chiamate in parallelo per efficienza
        const [pieRes, tableRes] = await Promise.all([
          getMonthlyExpenseDistribution(),
          getTop5Categories(),
        ]);
        setPieData(pieRes.data);
        setTableData(tableRes.data);
        setError(null);
      } catch (err) {
        console.error("Errore nel caricamento della dashboard:", err);
        setError(
          "Impossibile caricare i dati. Verifica che il backend sia attivo."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // L'array vuoto [] significa "esegui solo al primo caricamento della pagina"

  if (loading) {
    return (
      <div className="loading-container">
        <Loader2 className="spin" /> Caricamento dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <AlertCircle /> {error}
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h2>Panoramica Spese Mensili</h2>

      {/* Qui usiamo una classe CSS per metterli affiancati */}
      <div className="dashboard-grid">
        <ExpensePieChart data={pieData} />
        <TopExpensesTable data={tableData} />
      </div>
    </div>
  );
};

export default Dashboard;
