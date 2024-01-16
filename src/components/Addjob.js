import React from "react";
import Jobdetails from "./Jobdetails";
import Image2 from "./Image2";

function Addjob() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        <div style={{ height: "100vh", width: "57vw", overflow: "auto" }}>
          <Jobdetails />
        </div>
        <div style={{ height: "100vh", width: "43vw" }}>
          <Image2 />
        </div>
      </div>
    </div>
  );
}

export default Addjob;
