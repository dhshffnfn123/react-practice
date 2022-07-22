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

// json-server
//  - json-server 를 설치하고 db.json에 데이터를 만들어준다.  이 떄 root 폴더에 넣어야한다.
//  - 터미널에 json-server --watch db.json --port 5000를 타이핑해 실행한다. (포트는 리액트앱과 겹치지 않게 만든다.)
//  - 실행이 안되면 npx json-server --watch db.json --port 5000 를 입력한다.
