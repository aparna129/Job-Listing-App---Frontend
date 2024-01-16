import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import Checkboxtext from "./Checkboxtext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPart() {
  const navigate = useNavigate();

  function navigator() {
    navigate("/login");
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const [box, setBox] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = (value) => {
    setBox(value);
  };

  const addNewUser = () => {
    if (!box) {
      setError("Please click the box to create an account");
      return;
    }

    axios
      .post("https://joblistingappbackend.onrender.com/register", formData)
      .then((response) => {
        const {recruiterName} = response.data;
        localStorage.setItem("username", recruiterName);
        setError("");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        setBox(false);
        toast.success("User created successfully");
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
          setError("An error occurred while creating the user");
        }
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: "-6.2vh", marginBottom: "2vh" }}>
      {" "}
      <p style={{ marginLeft: "-0.6vw" }} className="login-part-text1">
        Create an account
      </p>
      <p style={{ marginLeft: "-0.35vw" }} className="login-part-text2">
        Your personal job finder is here
      </p>
      <div style={{ marginTop: "2vh" }}>
        <form method="post">
          <p>
            <input
              className="login-input"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            ></input>
          </p>
          <p>
            <input
              className="login-input"
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            ></input>
          </p>
          <p>
            <input
              className="login-input"
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={(e) => handleInputChange("mobile", e.target.value)}
            ></input>
          </p>
          <p>
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            ></input>
          </p>
        </form>
      </div>
      <Checkboxtext box={box} setBox={handleCheckboxChange} />
      <div style={{ marginTop: "-1.5vh" }}>
        <Button value="Create Account" onClick={addNewUser} />
      </div>
      <div style={{ marginTop: "-1.8vh", marginBottom: "2vh" }}>
        <p className="login-part-text3">
          Already have an account?
          <span
            onClick={navigator}
            style={{ cursor: "pointer" }}
            className="signin"
          >
            <u>Sign In</u>
          </span>
        </p>
      </div>
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

export default RegisterPart;
