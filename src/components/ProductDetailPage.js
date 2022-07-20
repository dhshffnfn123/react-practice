import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log(id); // 파라미터가 객체로 반환된다.

  return (
    <div>
      <h1>ProductDetailPage {id}</h1>
    </div>
  );
};

export default ProductDetailPage;
