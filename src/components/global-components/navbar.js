import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#8000ff", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link to="/" style={{ color: "#fff", fontWeight: 700, fontSize: 28, letterSpacing: 2, textDecoration: "none" }}>
        Plot
      </Link>
      <div style={{ display: "flex", gap: 24 }}>
        <Link to="/buyer" style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}>Buy/Rent</Link>
        <Link to="/seller" style={{ color: "#fff", fontWeight: 500, textDecoration: "none" }}>Sell</Link>
      </div>
    </nav>
  );
}
