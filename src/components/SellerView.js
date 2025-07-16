import React, { useState } from "react";

const cities = ["Delhi", "Mumbai", "Chennai", "Ahmedabad"];
const types = ["rent", "sale"];

export default function SellerView() {
  const [form, setForm] = useState({
    title: "",
    city: "Delhi",
    type: "rent",
    price: "",
    image: ""
  });
  const [myListings, setMyListings] = useState([]);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title || !form.city || !form.type || !form.price || !form.image) {
      setSuccess("Please fill in all fields.");
      return;
    }
    setMyListings([
      ...myListings,
      { ...form, id: Date.now() }
    ]);
    setForm({ title: "", city: "Delhi", type: "rent", price: "", image: "" });
    setSuccess("Property added (local only)");
    setTimeout(() => setSuccess(""), 2000);
  }

  return (
    <div style={{ padding: 24, background: "#f8f8ff", minHeight: "100vh" }}>
      <h2 style={{ color: "#8000ff", fontWeight: 700, marginBottom: 24 }}>Add a Property</h2>
      <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 24, borderRadius: 12, maxWidth: 400 }}>
        {success && <div style={{ color: "#008800", marginBottom: 12 }}>{success}</div>}
        <div style={{ marginBottom: 12 }}>
          <label>Title*</label>
          <input name="title" value={form.title} onChange={handleChange} className="form-control" required />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>City*</label>
          <select name="city" value={form.city} onChange={handleChange} className="form-control" required>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Type*</label>
          <select name="type" value={form.type} onChange={handleChange} className="form-control" required>
            {types.map(t => <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Price (INR)*</label>
          <input name="price" type="number" value={form.price} onChange={handleChange} className="form-control" required />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Image URL*</label>
          <input name="image" value={form.image} onChange={handleChange} className="form-control" required />
        </div>
        <button type="submit" className="btn btn-base" style={{ background: "#8000ff", color: "#fff", fontWeight: 600 }}>Add Property</button>
      </form>
      <h3 style={{ marginTop: 40, color: "#8000ff" }}>My Listings</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 16 }}>
        {myListings.map((p) => (
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
            <div style={{ fontWeight: 600, marginBottom: 8 }}>₹ {parseInt(p.price).toLocaleString()}</div>
          </div>
        ))}
        {myListings.length === 0 && <div>No listings yet.</div>}
      </div>
    </div>
  );
} 