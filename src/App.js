import "./App.css";
import { useState, useEffect } from "react";
import Box from "./components/Box";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import APage from "./components/APage";
import Bpage from "./components/Bpage";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(true);

  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<APage />} />
        <Route path="/b" element={<Bpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
