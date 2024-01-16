import React, { useState, useEffect } from "react";
import stipendicon from "../images/stipendicon.png";
import durationicon from "../images/durationicon.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Header from "./Header";
import Header2 from "./Header2";

function Editjob() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (userToken) {
      try {
        const decodedToken = jwtDecode(userToken);
        if (decodedToken.exp * 1000 < Date.now()) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, [userToken]);

  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/detaildesc/${id}`
        );
        const { jobDetails } = response.data;
        setJobData(jobDetails);
        const { text } = response.data;
        setText(text);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobData();
  }, [id]);

  const handleEditBtn = () => {
    navigate(`/editjob/${id}`);
  };

  return (
    <div
      style={{ height: "100vh", width: "100vw", backgroundColor: "#FFEFEF" }}
    >
      <div>{isLoggedIn ? <Header2 /> : <Header />}</div>{" "}
      {jobData ? (
        <div>
          <div
            className="title-of-job"
            style={{
              height: "12vh",
              width: "76vw",
              marginLeft: "12vw",
              marginRight: "12vw",
              marginTop: "-1.5vh",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  fontSize: "20px",
                  fontFamily: "DM Sans",
                  paddingTop: "3.8vh",
                  paddingBottom: "1vh",
                }}
              >
                {jobData.jobPosition} work from {text} job/internship at{" "}
                {jobData.companyName}
              </p>
            </div>
          </div>
          <div
            style={{
              height: "60vh",
              width: "72vw",
              backgroundColor: "white",
              marginLeft: "12vw",
              marginRight: "12vw",
              marginTop: "5vh",
              overflow: "auto",
              fontFamily: "DM Sans",
              paddingLeft: "3vw",
              paddingTop: "4.5vh",
              paddingBottom: "2.5vh",
              paddingRight: "2.2vw",
              letterSpacing: "1px",
            }}
          >
            <div style={{ height: "37vh" }} className="upper-part">
              <p style={{ fontSize: "15px", color: "#999999" }}>
                <span> 1w ago .</span>

                <span> {jobData.jobType}</span>

                <span style={{ marginLeft: "1vw" }}>
                  <img
                    style={{
                      height: "5vh",
                      width: "3vw",
                      marginTop: "-3vh",
                    }}
                    src={jobData.logoURL}
                    alt="logo"
                  ></img>
                </span>

                <span style={{ marginLeft: "1vw" }}>{jobData.companyName}</span>
              </p>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    marginTop: "2.5vh",
                    width: "60vw",
                  }}
                >
                  <span> {jobData.jobPosition}</span>
                </p>

                <button
                  style={{
                    height: "7vh",
                    width: "10vw",
                    marginTop: "3vh",
                    marginLeft: "10vw",
                    backgroundColor: "#ED5353",
                    color: "white",
                    fontSize: "18px",
                    fontFamily: "DM Sans",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: "5px",
                    marginRight: "3vw",
                  }}
                  onClick={handleEditBtn}
                >
                  Edit job
                </button>
              </div>
              <p
                style={{
                  marginTop: "1.5vh",
                  color: "#ED5353",
                  fontWeight: "bold",
                  fontSize: "16.5px",
                }}
              >
                <span>{jobData.location} | India</span>
              </p>
              <div style={{ display: "flex", marginTop: "6vh", gap: "8vw" }}>
                <div>
                  <div style={{ display: "flex", gap: "0.5vw" }}>
                    <img src={stipendicon} alt="stipendicon" />
                    <p style={{ color: "#999999", marginTop: "0.5vh" }}>
                      Stipend
                    </p>
                  </div>
                  <p
                    style={{
                      color: "#595959",
                      fontWeight: "bold",
                      marginTop: "1vh",
                    }}
                  >
                    <span> Rs {jobData.monthlySalary}/month</span>
                  </p>
                </div>

                <div>
                  <div style={{ display: "flex", gap: "0.5vw" }}>
                    <img src={durationicon} alt="durationicon" />
                    <p style={{ color: "#999999", marginTop: "0.5vh" }}>
                      Duration
                    </p>
                  </div>
                  <p
                    style={{
                      color: "#595959",
                      fontWeight: "bold",
                      marginTop: "1vh",
                    }}
                  >
                    <span>6 months</span>
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ height: "25vh", overflow: "auto" }}
              className="about-company-part"
            >
              <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                About company
              </p>
              <p
                style={{ marginTop: "3vh", fontSize: "18px", color: "#595959" }}
              >
                <p>{jobData.aboutCompany}</p>
              </p>
            </div>

            <div
              style={{ height: "45vh", overflow: "auto" }}
              className="about-job-part"
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "2.5vh",
                }}
              >
                About the job/internship
              </p>
              <p
                style={{ marginTop: "3vh", fontSize: "18px", color: "#595959" }}
              >
                <p>{jobData.jobDescription}</p>
              </p>
            </div>

            <div style={{ height: "15vh" }} className="skills-part">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "2.5vh",
                }}
              >
                Skill(s) required
              </p>
              {jobData.skillsRequired.map((skill, index) => (
                <p
                  style={{
                    height: "4vh",
                    width: "8vw",
                    backgroundColor: "#FFEEEE",
                    marginTop: "4vh",
                    borderRadius: "20px",
                    textAlign: "center",
                    paddingTop: "0.5vh",
                    display: "inline-block",
                    marginRight: "1vw",
                    color: "#595959",
                  }}
                >
                  <span>{skill}</span>
                </p>
              ))}
            </div>

            <div style={{ height: "20vh" }} className="additional-info-part">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginTop: "2.5vh",
                }}
              >
                Additional Information
              </p>
              <p
                style={{ marginTop: "3vh", fontSize: "18px", color: "#595959" }}
              >
                <p>{jobData.additionalInformation}</p>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Editjob;
