import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/page/ProductPage";
import ProductDetailPage from "./components/page/ProductDetailPage";
import LoginPage from "./components/page/LoginPage";
import NavBar from "./components/NavBar";
import { useParams } from "react-router-dom";

function App() {
  const [auth, setAuth] = useState(false);
  const params = useParams();

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

// submit
// button의 타입이 submit이면 onClick이 아닌 onSubmit으로 한다.
// submit은 새로고침이 되기 때문에 액션 함수에 preventDefault()를 넣어준다.
//  ex) form 태그에 event를 매개변수로 받아와서 넣어준다 (event.preventDefault())

// private Route
// 상태에 따른 렌더링을 할시 페이지 보호 기능.
// useNavigator 등을 이용하여 상태에 따라 url을 설정해준다.

// loading
// api 호출 시 useState를 사용해 호출 전 true, 호출 후 false로 하여 로딩을 구현한다.22

// Redux
//
