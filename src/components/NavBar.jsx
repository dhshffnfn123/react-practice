import React from "react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/login");
  };

  const search = (event) => {
    if (event.key === "enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다. (쿼리)
      navi(`/?q=${event.target.value}`);
    }
  };

  return (
    <div>
      <div className="login-button" onClick={onClick}>
        <FaRegUser />
        <div>Login</div>
      </div>
      <div className="nav-section">
        <img />
      </div>
      <div>
        <input type={"text"} onKeyPress={(event) => search} />
      </div>
    </div>
  );
};

export default NavBar;
