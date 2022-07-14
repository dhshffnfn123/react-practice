import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <div
        style={{
          width: "100%",
          height: "70%",
          border: "2px solid black",
          fontSize: "50px",
        }}
      >
        {props.select && props.select}
      </div>
      <h2>Win</h2>
    </div>
  );
};

export default Box;
