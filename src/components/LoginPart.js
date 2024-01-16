import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPart() {
  const navigate = useNavigate();

  function navigator() {
    navigate("/register");
  }

  const [error, setError] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setLoginData({
      ...loginData,
      [field]: value,
    });
  };

  const handleLogin = () => {
    console.log(loginData);
    axios
      .post("http://localhost:4000/login", loginData)
      .then((response) => {
        const { yourjwttoken } = response.data;
        localStorage.setItem("jwtToken", yourjwttoken);
        const { recruiterName } = response.data;
        localStorage.setItem("username", recruiterName);
        setError("");
        setLoginData({
          email: "",
          password: "",
        });
        toast.success("Logged in successfully");
        navigate("/home");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("An error occured while logging in");
        }
        console.log(error);
      });
  };

  return (
    <div className="leftside-login">
      <p className="login-part-text1">Already have an account?</p>
      <p className="login-part-text2">Your personal job finder is here</p>
      <div style={{ marginTop: "5vh" }}>
        <form>
          <p>
            <input
              className="login-input"
              type="text"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            ></input>
          </p>
          <p>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            ></input>
          </p>
        </form>
      </div>
      <Button onClick={handleLogin} value="Sign in" />
      <p className="login-part-text3">
        Don’t have an account?
        <span
          onClick={navigator}
          style={{ cursor: "pointer" }}
          className="signup"
        >
          <u>Sign Up</u>
        </span>
      </p>
      <div style={{ marginLeft: "6vw" }}>
        {error ? (
          <div style={{ color: "red", marginTop: "0.5vh", fontSize: "18px" }}>
            <p>{error}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LoginPart;
