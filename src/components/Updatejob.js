import React from "react";
import Jobdetails2 from "./Jobdetails2";
import Image2 from "./Image2";
import { useParams } from "react-router-dom";

function Updatejob({ existingJobData }) {
  const { id } = useParams();

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
          <Jobdetails2 id={id} existingJobData={existingJobData} />
        </div>

        <div style={{ height: "100vh", width: "43vw" }}>
          <Image2 />
        </div>
      </div>
    </div>
  );
}

export default Updatejob;
