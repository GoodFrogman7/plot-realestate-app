import React, { useState } from "react";
import { properties } from "../data/properties";

const cities = ["Delhi", "Mumbai", "Chennai", "Ahmedabad"];
const types = ["rent", "sale"];

export default function BuyerView() {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = properties.filter(
    (p) =>
      (city === "" || p.city === city) &&
      (type === "" || p.type === type) &&
      (maxPrice === "" || p.price <= parseInt(maxPrice))
  );

  return (
    <div style={{ padding: 24, background: "#f8f8ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#8000ff", fontWeight: 700, marginBottom: 24 }}>Browse Properties</h2>
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        <select value={city} onChange={e => setCity(e.target.value)}>
          <option value="">All Cities</option>
          {cities.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="">All Types</option>
          {types.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
        </select>
        <input
          type="number"
          placeholder="Max Price (INR)"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          style={{ width: 140 }}
        />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        {filtered.map((p) => (
          <div key={p.id} style={{
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px #0001",
            padding: 16,
            width: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img src={p.image} alt={p.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8 }} />
            <h4 style={{ margin: "16px 0 8px 0", color: "#8000ff" }}>{p.title}</h4>
            <div style={{ marginBottom: 8 }}>{p.city} • {p.type.charAt(0).toUpperCase() + p.type.slice(1)}</div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>₹ {p.price.toLocaleString()}</div>
          </div>
        ))}
        {filtered.length === 0 && <div>No properties found.</div>}
      </div>
    </div>
  );
} 