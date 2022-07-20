import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams(); // 쿼리를 가져온다.
  console.log("getQuery : " + query.get("page"));

  return (
    <div>
      <h1>Show the ProductPage</h1>
    </div>
  );
};

export default ProductPage;
