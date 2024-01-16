import React from "react";
import "./register.css";
import RegisterPart from "./RegisterPart";
import ImagePart from "./ImagePart";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  return (
    <div className="register-page">
      <div style={{ height: "100vh", width: "51vw" }}>
        <RegisterPart />
      </div>
      <div>
        <ImagePart />
      </div>
    </div>
  );
}

export default RegisterPage;
