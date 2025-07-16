import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/global-components/navbar";
import Footer from "./components/global-components/footer-v2";
import BuyerView from "./components/BuyerView";
import SellerView from "./components/SellerView";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/buyer" />} />
        <Route path="/buyer" element={<BuyerView />} />
        <Route path="/seller" element={<SellerView />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
