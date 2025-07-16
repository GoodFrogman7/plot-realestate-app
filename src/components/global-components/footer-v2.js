import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#8000ff", color: "#fff", padding: "2rem 0", textAlign: "center", marginTop: 40 }}>
      <div style={{ fontWeight: 700, fontSize: 20, letterSpacing: 2 }}>Plot</div>
      <div style={{ marginTop: 8, fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Plot. All rights reserved.
      </div>
    </footer>
  );
}
