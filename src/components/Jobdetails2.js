import React, { useState } from "react";
import Fields from "./Fields";
import Inputs from "./Inputs";
import Select from "./Select";
import Textboxes from "./Textboxes";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Jobdetails({ id }) {
  const [jobData, setJobData] = useState({
    companyName: "",
    logoURL: "",
    jobPosition: "",
    monthlySalary: "",
    jobType: "",
    remoteOffice: "",
    location: "",
    jobDescription: "",
    aboutCompany: "",
    skillsRequired: "",
    additionalInformation: "",
  });

  const jobTypes = ["Full-time", "Part-time", "Intern"];
  const remoteOfficeOptions = ["Remote", "Office"];

  const handleChange = (field, value) => {
    setJobData({
      ...jobData,
      [field]: value,
    });
  };

  const [error, setError] = useState("");

  const editjob = () => {
    console.log(jobData);
    axios
      .patch(`https://joblistingappbackend.onrender.com/editjob/${id}`, jobData)
      .then((response) => {
        setError("");
        const { newJobDetails } = response.data;
        console.log(newJobDetails);
        toast.success("Job Updated successfully");
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setError(error.response.data.error);
        } else {
          setError("An error occurred while updating the job");
        }
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <p
          style={{
            fontFamily: "DM Sans",
            fontSize: "30px",
            marginLeft: "5vw",
            marginRight: "3vw",
            marginTop: "1.2vh",
            letterSpacing: "1.5px",
            fontWeight: "bold",
          }}
        >
          Add job description
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginTop: "-1vh",
              marginLeft: "5vw",
              marginRight: "3vw",
              fontFamily: "DM Sans",
              fontSize: "20px",
            }}
          >
            <Fields value="Company Name" />
            <Fields value="Add logo URL" />
            <Fields value="Job position" />
            <Fields value="Monthly salary" />
            <Fields value="Job Type" />
            <Fields value="Remote/office" />
            <Fields value="Location" />
            <div style={{ height: "8.6vh", marginTop: "-0.8vh" }}>
              <Fields value="Job Description" />
            </div>
            <div style={{ height: "9vh" }}>
              <Fields value="About Company" />
            </div>
            <div>
              <Fields value="Skills Required" />
              <Fields value="Information" />
            </div>
          </div>
          <div
            style={{
              marginTop: "-0.5vh",
              marginRight: "3vw",
              marginLeft: "1vw",
            }}
          >
            <Inputs
              placeholder="Enter your company name here"
              value={jobData.companyName}
              onChange={(value) => handleChange("companyName", value)}
            />
            <Inputs
              placeholder="Enter the link"
              value={jobData.logoURL}
              onChange={(value) => handleChange("logoURL", value)}
            />
            <Inputs
              placeholder="Enter job position"
              value={jobData.jobPosition}
              onChange={(value) => handleChange("jobPosition", value)}
            />
            <Inputs
              placeholder="Enter Amount in rupees"
              value={jobData.monthlySalary}
              onChange={(value) => handleChange("monthlySalary", value)}
            />
            <Select
              value={jobData.jobType}
              options={jobTypes}
              onChange={(value) => handleChange("jobType", value)}
            />
            <Select
              value={jobData.remoteOffice}
              options={remoteOfficeOptions}
              onChange={(value) => handleChange("remoteOffice", value)}
            />
            <Inputs
              placeholder="Enter Location"
              value={jobData.location}
              onChange={(value) => handleChange("location", value)}
            />
            <Textboxes
              placeholder="Type the job description"
              value={jobData.jobDescription}
              onChange={(value) => handleChange("jobDescription", value)}
            />
            <Textboxes
              placeholder="Type about your company"
              value={jobData.aboutCompany}
              onChange={(value) => handleChange("aboutCompany", value)}
            />
            <Inputs
              placeholder="Enter the must have skills"
              value={jobData.skillsRequired}
              onChange={(value) => handleChange("skillsRequired", value)}
            />
            <Inputs
              placeholder="Enter the additional information"
              value={jobData.additionalInformation}
              onChange={(value) => handleChange("additionalInformation", value)}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "1.5vh",
            marginLeft: "33.35vw",
            marginRight: "2vw",
            marginBottom: "1vh",
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <button
              style={{
                color: "#C2C2C2",
                backgroundColor: "white",
                border: "1px solid #CECECE",
                height: "5vh",
                width: "7vw",
                borderRadius: "6px",
              }}
            >
              Cancel
            </button>
          </div>

          <div>
            <button
              onClick={editjob}
              style={{
                color: "#FFFFFF",
                backgroundColor: "#ED5353",
                border: "1px solid #ED5353",
                height: "5vh",
                width: "7vw",
                borderRadius: "6px",
              }}
            >
              Edit job
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "4.8vw", marginBottom: "1.5vh" }}>
        {error ? (
          <div style={{ color: "red", marginTop: "0.5vh", fontSize: "18px" }}>
            <p>{error}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Jobdetails;
