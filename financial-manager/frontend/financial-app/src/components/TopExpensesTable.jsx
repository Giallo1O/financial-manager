// src/components/TopExpensesTable.jsx
import React from "react";

// Helper per formattare la valuta (lo riusiamo)
const formatCurrency = (value) =>
    new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
        value
    );

const TopExpensesTable = ({ data }) => {
    // Prendiamo solo i primi 5 elementi per sicurezza
    const top5 = data.slice(0, 5);

    return (
        <div className="table-box">
            <h3>Top 5 Categorie di Spesa</h3>
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th style={{ textAlign: "right" }}>Importo</th>
                    </tr>
                </thead>
                <tbody>
                    {top5.map((item, index) => (
                        <tr key={index}>
                            <td>{item.category}</td>
                            <td
                                style={{
                                    textAlign: "right",
                                    fontWeight: "bold",
                                    color: "#e74c3c",
                                }}
                            >
                                {formatCurrency(item.amount)}
                            </td>
                        </tr>
                    ))}
                    {top5.length === 0 && (
                        <tr>
                            <td colSpan="2" style={{ textAlign: "center" }}>
                                Nessuna spesa questo mese
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TopExpensesTable;
