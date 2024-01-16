import React from "react";
import LoginPart from "./LoginPart";
import ImagePart from "./ImagePart";
import "./login.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div>
        <LoginPart />
      </div>
      <div>
        <ImagePart />
      </div>
    </div>
  );
}

export default LoginPage;
