import React, { useState, useEffect } from "react";
import {
  getCategories,
  saveTransaction,
  getRecentAdded,
} from "../services/api";
import { PlusCircle, History, Euro, Tag, Calendar } from "lucide-react";

const AddTransactionPage = () => {
  const [categories, setCategories] = useState([]);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Stato del Form
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0], // Data odierna predefinita
    type: "EXPENSE",
  });

  useEffect(() => {
    getCategories().then((res) => setCategories(res.data));
    getRecentAdded().then((res) => setRecent(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await saveTransaction(formData);
      alert("Transazione inserita con successo!");
      // Reset form
      setFormData({ ...formData, amount: "", category: "" });
      // Ricarica la lista in basso
      const updatedRecent = await getRecentAdded();
      setRecent(updatedRecent.data);
    } catch (err) {
      alert("Errore nel salvataggio");
    } finally {
      setLoading(false);
    }
  };

  const formatEuro = (val) =>
    new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(val);

  return (
    <div className="add-transaction-container">
      {/* SEZIONE INSERIMENTO */}
      <div className="card form-card">
        <h3>
          <PlusCircle size={20} /> Inserisci Nuova Transazione
        </h3>
        <form onSubmit={handleSubmit} className="transaction-form">
          <div className="form-grid">
            <div className="input-group">
              <label>
                <Euro size={16} /> Prezzo
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                required
                value={formData.amount}
                onChange={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <label>
                <Tag size={16} /> Categoria
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
              >
                <option value="">Seleziona...</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>
                <Calendar size={16} /> Data di esecuzione
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            <div className="input-group">
              <label>Tipo</label>
              <div className="type-selector">
                <button
                  type="button"
                  className={
                    formData.type === "EXPENSE" ? "active expense" : ""
                  }
                  onClick={() => setFormData({ ...formData, type: "EXPENSE" })}
                >
                  Uscita
                </button>
                <button
                  type="button"
                  className={formData.type === "INCOME" ? "active income" : ""}
                  onClick={() => setFormData({ ...formData, type: "INCOME" })}
                >
                  Entrata
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Salvataggio..." : "Salva Transazione"}
          </button>
        </form>
      </div>

      {/* SEZIONE ELENCO ULTIME INSERITE */}
      <div className="card list-card">
        <h3>
          <History size={20} /> Ultime transazioni inserite
        </h3>
        <table className="simple-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Categoria</th>
              <th style={{ textAlign: "right" }}>Importo</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((item) => (
              <tr key={item.id}>
                <td>{new Date(item.date).toLocaleDateString("it-IT")}</td>
                <td>
                  <span className="badge">{item.cat}</span>
                </td>
                <td
                  style={{ textAlign: "right", fontWeight: "bold" }}
                  className={item.amount > 0 ? "text-success" : "text-danger"}
                >
                  {formatEuro(item.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddTransactionPage;
