import React from "react";
import { useNavigate } from "react-router-dom";

const Bpage = () => {
  const navigator = useNavigate();

  const goToHome = () => {
    navigator("/");
  };

  return (
    <div>
      <h1>BBB</h1>
      <button onClick={goToHome``}>useNavigator</button>
    </div>
  );
};

export default Bpage;
