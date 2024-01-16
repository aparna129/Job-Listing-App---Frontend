import React from "react";
import { useNavigate } from "react-router-dom";

function Header2() {
  const userName = localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        height: "10vh",
        width: "100vw",
        borderRadius: "0px 0px 50px 50px",
        backgroundColor: "#ED5353",
        display: "flex",
        marginRight: "3vw",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          fontFamily: "DM Sans",
          fontSize: "25px",
          paddingLeft: "5vw",
          paddingTop: "3vh",
          fontWeight: "bold",
          width: "80vw",
          marginTop: "-1vh",
        }}
      >
        <p>Jobfinder</p>
      </div>

      <div
        style={{
          marginTop: "2.5vh",
          marginRight: "3vw",
          width: "20vw",
          display: "flex",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "DM Sans",
            fontSize: "17px",
            fontWeight: "600",
            letterSpacing: "1px",
            cursor: "pointer",
          }}
          onClick={handleLogout}
        >
          Logout
        </p>
        <p
          style={{
            color: "white",
            marginLeft: "1vw",
            marginRight: "1vw",
            fontFamily: "DM Sans",
            fontSize: "17px",
            fontWeight: "600",
            letterSpacing: "2px",
          }}
        >
          Hello!<span>{userName}</span>
        </p>
      </div>
    </div>
  );
}

export default Header2;
