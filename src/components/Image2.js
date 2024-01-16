import React from "react";
import addjobimage from "../images/addjobimage.png";

function Image2() {
  return (
    <div>
      <div>
        <img
          style={{ height: "100vh", width: "100%" }}
          src={addjobimage}
          alt="addjobimage"
        />
        <p
          style={{
            position: "absolute",
            marginTop: "-93vh",
            marginLeft: "5.5vw",
            marginRight: "4vw",
            color: "#FFFFFF",
            fontFamily: "DM Sans",
            fontSize: "30px",
            letterSpacing: "1px",
          }}
        >
          Recruiter add job details here
        </p>
      </div>
    </div>
  );
}

export default Image2;
