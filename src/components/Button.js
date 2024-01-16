import React from "react";

function Button({ value,onClick }) {
  return (
    <div>
      <div>
        <button  onClick={onClick} 
          style={{
            backgroundColor: "#ED5353",
            border: "none",
            color: "#FFFFFF",
            height: "7.5vh",
            width: "17vw",
            marginLeft: "6vw",
            marginRight: "5vw",
            marginTop: "7vh",
            borderRadius: "5px",
            fontFamily: "DM Sans",
            fontSize: "20px",
            letterSpacing: "3px",
            fontWeight: "600",
          }}
        >
          {value}
        </button>
      </div>
    </div>
  );
}

export default Button;
