import React, { Component } from "react";
import BoxClass from "./components/BoxClass";

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter2: 0,
      num: 1,
      value: 0,
    };
    console.log("constructor");
    // 제일 먼저 실행
  }

  increase = () => {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1,
    });
  }; // class에서는 const를 쓰지 않는다.

  componentDidMount() {
    // api 콜
  }

  componentDidUpdate() {
    console.log("update");
  }

  render() {
    // UI 를 그려줌
    console.log("render");
    return (
      <div>
        <div>state: {this.state.counter2}</div>
        <button onClick={this.increase}>Click</button>
        <BoxClass number={this.state.num} />
      </div>
    );
  }
}

export default AppClass;
