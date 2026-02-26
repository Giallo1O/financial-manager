// src/components/TransactionTabs.jsx
import React, { useState } from "react";

const TransactionTabs = ({ transactions }) => {
    const [activeTab, setActiveTab] = useState("ALL"); // ALL, INCOME, EXPENSE

    // Filtriamo i dati in base alla scheda selezionata
    const filteredTransactions = transactions.filter((t) => {
        if (activeTab === "ALL") return true;
        return t.type === activeTab;
    });

    const formatCurrency = (val) =>
        new Intl.NumberFormat("it-IT", {
            style: "currency",
            currency: "EUR",
        }).format(val);

    return (
        <div className="transactions-card">
            <div className="tabs-header">
                <button
                    className={activeTab === "ALL" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("ALL")}
                >
                    {" "}
                    Tutte{" "}
                </button>
                <button
                    className={activeTab === "INCOME" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("INCOME")}
                >
                    {" "}
                    Entrate{" "}
                </button>
                <button
                    className={activeTab === "EXPENSE" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("EXPENSE")}
                >
                    {" "}
                    Uscite{" "}
                </button>
            </div>

            <div className="table-container">
                <table className="transaction-table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descrizione</th>
                            <th>Categoria</th>
                            <th style={{ textAlign: "right" }}>Importo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.map((t) => (
                            <tr key={t.id}>
                                <td className="date-cell">
                                    {new Date(t.date).toLocaleDateString("it-IT")}
                                </td>
                                <td>{t.description}</td>
                                <td>
                                    <span className="category-badge">{t.category}</span>
                                </td>
                                <td
                                    style={{ textAlign: "right", fontWeight: "bold" }}
                                    className={
                                        t.type === "INCOME" ? "amount-income" : "amount-expense"
                                    }
                                >
                                    {t.type === "INCOME" ? "+" : ""}
                                    {formatCurrency(t.amount)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredTransactions.length === 0 && (
                    <p style={{ textAlign: "center", padding: "20px" }}>
                        Nessuna transazione trovata.
                    </p>
                )}
            </div>
        </div>
    );
};

export default TransactionTabs;
