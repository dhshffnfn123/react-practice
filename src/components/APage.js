import React from "react";
import { useNavigate } from "react-router-dom";

const APage = () => {
  const navi = useNavigate();
  const goProductPage = () => {
    navi("/product");
  };

  return (
    <div>
      <h1>AAA</h1>
      <button onClick={goProductPage}>goToProductPage</button>
    </div>
  );
};

export default APage;
