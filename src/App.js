import "./App.css";
import { useState, useEffect } from "react";
import Box from "./components/Box";

function App() {
  // const [counter, setCounter] = useState(0);
  // const increase = () => {
  //   setCounter(counter + 1);
  // };

  // const [userSelect, setUserSelect] = useState(null);
  // const [computerSelect, setComputerSelect] = useState(null);
  // const [result, setResult] = useState(null);

  // const choice = {
  //   rock: {
  //     name: "Rock",
  //   },
  //   scissors: {
  //     name: "scissors",
  //   },
  //   paper: {
  //     name: "paper",
  //   },
  // };

  // const play = (userChoice) => {
  //   setUserSelect(userChoice);
  //   let computerChoice = randomChoice();
  //   setComputerSelect(computerChoice);
  //   judgement(userSelect, computerSelect);
  // };

  // const judgement = (user, computer) => {
  //   console.log(user, computer);
  // };

  // const randomChoice = () => {
  //   let itemArray = Object.keys(choice); // Object.keys : 객체의 키값만 뽑아서 배열로 만들어주는 함수

  //   let randomItem = Math.floor(Math.random() * itemArray.length); // floor는 버림
  //   let final = itemArray[randomItem];
  //   return final;
  // };

  // useEffect(() => {
  //   console.log("useEffect");
  //   // == componentDIdMount
  // });

  // const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    console.log("getCurr");
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재 위치 : " + lat, lon);
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.opennweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=de14f99f543bf8277bafbe0fb88518cd`;
    let response = await fetch(url);
    let data = await response.json;
    console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  });

  return <div></div>;
}

export default App;
