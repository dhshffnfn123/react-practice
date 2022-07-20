import "./App.css";
import { useState, useEffect } from "react";
import Box from "./components/Box";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import APage from "./components/APage";
import Bpage from "./components/Bpage";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<APage />} />
        <Route path="/b" element={<Bpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product:id" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
