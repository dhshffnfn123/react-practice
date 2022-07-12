const Box = (props) => {
  return (
    <div className="box">
      BOX {props.num}
      <p>{props.state}</p>
    </div>
  );
};
export default Box;
