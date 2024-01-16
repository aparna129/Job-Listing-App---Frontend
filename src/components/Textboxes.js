import React from "react";
import "./input.css";

function Textboxes({ placeholder, value, onChange }) {
  return (
    <div>
      <div>
        <textarea
          method="post"
          style={{
            height: "4.5vh",
            width: "25.25vw",
            fontFamily: "DM Sans",
            borderRadius: "4px",
            paddingLeft: "0.7vw",
            paddingBottom: "4vh",
            border: "1px solid #C2C2C2",
            fontSize: "16px",
            marginTop: "2vh",
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
}

export default Textboxes;
