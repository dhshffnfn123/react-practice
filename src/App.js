import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const choice = {
    rock: {
      name: "Rock",
    },
    scissors: {
      name: "scissors",
    },
    paper: {
      name: "paper",
    },
  };

  const play = (userChoice) => {
    setUserSelect(userChoice);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(userSelect, computerSelect);
  };

  const judgement = (user, computer) => {
    console.log(user, computer);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // Object.keys : 객체의 키값만 뽑아서 배열로 만들어주는 함수

    let randomItem = Math.floor(Math.random() * itemArray.length); // floor는 버림
    let final = itemArray[randomItem];
    return final;
  };

  return (
    <div>
      <div className="main">
        <Box title="you" select={userSelect} result={result} />
        <Box title="computer" select={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        {/* callback함수 형태로 넣어주어야 한다. */}
      </div>
    </div>
  );
}

export default App;
