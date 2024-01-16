import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
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
          width: "85vw",
          marginTop: "-1vh",
        }}
      >
        <p>Jobfinder</p>
      </div>
      <div
        style={{
          marginTop: "2.5vh",
          marginRight: "3vw",
          width: "15vw",
        }}
      >
        <button
          style={{
            height: "4.5vh",
            minWidth: "5.2vw",
            border: "1px solid white",
            color: "white",
            borderRadius: "5px",
            background: "none",
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          style={{
            height: "4.5vh",
            minWidth: "5.2vw",
            border: "1px solid white",
            color: "#ED5353",
            borderRadius: "5px",
            backgroundColor: "white",
            marginLeft: "1vw",
            marginRight: "1vw",
            fontFamily: "DM Sans",
            fontSize: "15px",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
