import React from "react";
import "./input.css";

function Inputs({ placeholder, value, onChange }) {
  return (
    <div>
      <div>
        <form method="post">
          <input
            style={{
              height: "4vh",
              width: "25vw",
              fontFamily: "DM Sans",
              fontSize: "16px",
              paddingLeft: "1vw",
              border: "1px solid #C2C2C2",
              borderRadius: "4px",
              marginTop: "2.75vh",
            }}
            type="text"
            className="job-page-input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Inputs;
