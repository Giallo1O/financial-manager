// src/components/ExpensePieChart.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Colori vivaci per le diverse categorie
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AF19FF",
  "#FF4560",
];

// Helper per formattare la valuta nel tooltip
const formatCurrency = (value) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(
    value
  );

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p className="label">
          <strong>{payload[0].name}</strong>
        </p>
        <p className="intro">{formatCurrency(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

const ExpensePieChart = ({ data }) => {
  return (
    <div className="chart-box">
      <h3>Ripartizione Spese del Mese</h3>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend layout="vertical" align="right" verticalAlign="middle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
