import React from "react";

function Select({ value, options, onChange }) {
  return (
    <div>
      <form method="post">
        <select
          style={{
            height: "4.2vh",
            fontFamily: "DM Sans",
            borderRadius: "4px",
            paddingLeft: "0.7vw",
            border: "1px solid #C2C2C2",
            fontSize: "16px",
            width: "10vw",
            marginTop: "2vh",
            color: value ? "black" : "#ADADAD",
          }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option disabled selected value="">
            Select
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default Select;
