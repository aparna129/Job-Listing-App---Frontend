import React, { useState, useEffect } from "react";
import peopleicon from "../images/peopleicon.png";
import rupeeicon from "../images/rupeeicon.png";
import flagicon from "../images/flagicon.png";
import "./jobsavailable.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Jobs({ job }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userToken = localStorage.getItem("jwtToken");

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/home/${job._id}/detailDescOfJob`);
  };

  const handleEditJob = () => {
    navigate(`/home/${job._id}/edit`);
  };

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

  return (
    <div
      style={{
        height: "15vh",
        width: "79vw",
        marginLeft: "0.5vw",
        marginRight: "0.5vw",
        marginTop: "4vh",
        boxShadow: "0 0 20px 4px rgba(255, 32, 32, 0.25)",
        display: "flex",
      }}
    >
      <div style={{ height: "100%", width: "8vw" }}>
        <img
          style={{
            height: "7vh",
            width: "3.2vw",
            marginTop: "2.5vh",
            marginLeft: "2vw",
          }}
          src={job.logoURL}
          alt="logo"
        />
      </div>

      <div className="jobtype" style={{ height: "100%", width: "35vw" }}>
        <p style={{ fontWeight: "bold", marginTop: "2.3vh", fontSize: "17px" }}>
          {job.jobPosition}
        </p>
        <p
          style={{
            marginTop: "1vh",
            color: "#9C9C9C",
            fontSize: "15.5px",
            fontWeight: "bold",
          }}
        >
          <span>
            <img
              style={{ height: "2vh", width: "1.5vw" }}
              src={peopleicon}
              alt="people"
            />
            <span style={{ marginLeft: "0.5vw" }}>11 - 50</span>
          </span>
          <span>
            <img
              style={{ height: "2vh", width: "0.8vw", marginLeft: "2vw" }}
              src={rupeeicon}
              alt="rupee"
            />
            <span style={{ marginLeft: "0.5vw" }}>{job.monthlySalary}</span>
          </span>
          <span>
            <img
              style={{
                height: "4.5vh",
                width: "2vw",
                marginLeft: "2vw",
                position: "absolute",
                marginTop: "-0.7vh",
              }}
              src={flagicon}
              alt="flagicon"
            />
            <span style={{ marginLeft: "4.8vw" }}>{job.location}</span>
          </span>
        </p>
        <p
          style={{
            color: "#ED5353",
            marginTop: "1.3vh",
            marginBottom: "0.5vh",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          <span>{job.remoteOrOffice}</span>
          <span style={{ marginLeft: "2.2vw" }}>{job.jobtype}</span>
        </p>
      </div>

      <div style={{ height: "100%", width: "55vw", textAlign: "right" }}>
        <div>
          {job.skillsRequired.map((skill) => (
            <button
              style={{
                marginRight: "1.7vw",
                marginTop: "2vh",
                height: "4vh",
                width: "7vw",
                fontFamily: "DM Sans",
                fontSize: "16px",
                backgroundColor: "#FFEEEE",
                border: "none",
                fontWeight: "500",
                letterSpacing: "1px",
              }}
            >
              {skill}
            </button>
          ))}
        </div>
        <div>
          {isLoggedIn ? (
            <div>
              <button
                style={{
                  color: "#ED5353",
                  background: "none",
                  border: "2px solid #ED5353",
                  marginTop: "2vh",
                  marginBottom: "1vh",
                  marginRight: "1.7vw",
                  height: "5vh",
                  width: "10vw",
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  borderRadius: "5px",
                }}
                onClick={handleEditJob}
              >
                Edit job
              </button>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#ED5353",
                  marginBottom: "1vh",
                  marginRight: "1.7vw",
                  border: "none",
                  height: "5vh",
                  width: "10vw",
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  borderRadius: "5px",
                }}
                onClick={handleViewDetails}
              >
                View details
              </button>
            </div>
          ) : (
            <>
              {" "}
              <button
                style={{
                  color: "white",
                  backgroundColor: "#ED5353",
                  marginTop: "2vh",
                  marginBottom: "1vh",
                  marginRight: "1.7vw",
                  border: "none",
                  height: "5vh",
                  width: "10vw",
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  letterSpacing: "1px",
                  borderRadius: "5px",
                }}
                onClick={handleViewDetails}
              >
                View details
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
