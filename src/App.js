import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/page/ProductPage";
import ProductDetailPage from "./components/page/ProductDetailPage";
import LoginPage from "./components/page/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
