import React from "react";

function Checkboxtext({ box, setBox }) {
  const handleCheckboxChange = () => {
    setBox(!box);
  };

  return (
    <div>
      <div
        style={{
          marginTop: "3vh",
          marginLeft: "6vw",
          color: "#525252",
          fontFamily: "DM Sans",
        }}
      >
        <form>
          <input
            type="checkbox"
            checked={box}
            onChange={handleCheckboxChange}
          ></input>{" "}
          <span
            style={{
              marginLeft: "0.18vw",
              fontSize: "15.2px",
            }}
          >
            By creating an account, I agree to our terms of use and privacy
            policy
          </span>{" "}
        </form>
      </div>
    </div>
  );
}

export default Checkboxtext;
