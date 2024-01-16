import React, { useState, useEffect } from "react";
import searchicon from "../images/searchicon.png";
import "./searchinput.css";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Jobs from "./Jobs";

function Searchbox() {
  const [skills, setSkills] = useState([]);
  const [jobPosition, setJobPosition] = useState("");

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedSkills = localStorage.getItem("selectedskills");
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    }
  }, []);

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

  const addSkill = (event) => {
    const selectedSkillValue = event.target.value;
    if (!skills.includes(selectedSkillValue)) {
      const updatedSkills = [...skills, selectedSkillValue];
      setSkills(updatedSkills);
      localStorage.setItem("selectedskills", JSON.stringify(updatedSkills));
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
    localStorage.setItem("selectedskills", JSON.stringify(updatedSkills));
  };

  const clearAllSkills = () => {
    setSkills([]);
    localStorage.removeItem("selectedskills");
    setJobs([]);
    setError(false);
  };

  const addjob = () => {
    navigate("/addingjob");
  };

  useEffect(() => {
    if (skills.length > 0 || jobPosition) {
      const skillsString = skills.join(",");
      axios
        .post("https://joblistingappbackend.onrender.com/filterjobs", {
          skills: skillsString,
          jobPosition,
        })
        .then((response) => {
          const { jobs } = response.data;
          setJobs(jobs);
          setError(false);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            setError(error.response.data.error);
          } else {
            setError("An error occurred while fetching jobs");
          }
          setJobs([]);
        });
    }
  }, [skills, jobPosition]);

  return (
    <div
      style={{
        height: "21vh",
        width: "80vw",
        marginLeft: "10vw",
        marginRight: "10vw",
        marginTop: "3.5vh",
        boxShadow: "0 0 20px 4px rgba(255, 32, 32, 0.25)",
        position: "relative",
      }}
    >
      <div
        className="search-bar"
        style={{
          paddingTop: "3.2vh",
          marginLeft: "4vw",
          fontFamily: "DM Sans",
          marginRight: "4vw",
          position: "relative",
        }}
      >
        {" "}
        <input
          className="search-input"
          style={{
            height: "5.5vh",
            width: "69vw",
            paddingLeft: "3vw",
            paddingTop: "0.2vh",
            position: "relative",
            border: "2px solid #E3E3E3",
            borderRadius: "10px",
            fontSize: "18px",
          }}
          type="text"
          placeholder="Type any job title"
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />
        <img
          src={searchicon}
          style={{
            height: "3vh",
            width: "1.5vw",
            position: "absolute",
            marginLeft: "0.8vw",
            marginTop: "-4.6vh",
          }}
          alt="search-icon"
        />
      </div>

      <div className="skills" style={{ display: "flex" }}>
        <div className="skills-select-box">
          <form>
            <select
              className="select-skills"
              style={{
                height: "5.7vh",
                borderRadius: "8px",
                paddingLeft: "0.7vw",
                border: "2px solid #CECECE",
                fontSize: "18px",
                width: "10vw",
                marginTop: "3vh",
                marginLeft: "4vw",
                color: "#9C9C9C",
                fontWeight: "bold",
              }}
              onChange={addSkill}
            >
              <option disabled selected value="">
                Skills
              </option>
              <option value="Frontend">Frontend</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="NodeJs">NodeJs</option>
              <option value="Backend">Backend</option>
              <option value="PHP">PHP</option>
              <option value="Angular">Angular</option>
            </select>
          </form>
        </div>

        <div
          style={{ width: "70vw", overflowX: "auto" }}
          className="selected-skills"
        >
          {skills.map((skill, index) => (
            <div style={{ display: "inline-block" }} key={index}>
              <div style={{ display: "flex" }}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#ffeeee",
                      fontFamily: "DM Sans",
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: "3.3vh 2vw 0 1vw",
                      padding: "0.8vh 1vw",
                      width: "5vw",
                    }}
                    className="each-skill"
                  >
                    {skill}
                  </span>
                </div>
                <div style={{ marginTop: "4.5vh", marginLeft: "-2vw" }}>
                  <span
                    style={{
                      color: "white",
                      backgroundColor: "#FF6B6B",
                      paddingTop: "1.2vh",
                      paddingBottom: "1.1vh",
                      paddingRight: "1vw",
                      paddingLeft: "1vw",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    className="skills-cross"
                    onClick={() => removeSkill(index)}
                  >
                    X
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="clear"
          style={{
            marginTop: isLoggedIn ? "8vh" : "4vh",
            marginLeft: isLoggedIn ? "40vw" : "73vw",
            marginRight: "3vw",
            color: "#ED5353",
            fontSize: "16px",
            fontFamily: "DM Sans",
            fontWeight: "bold",
            position: "absolute",
          }}
        >
          <p style={{ cursor: "pointer" }} onClick={clearAllSkills}>
            Clear
          </p>
        </div>
        <div>
          {isLoggedIn ? (
            <div>
              <button
                onClick={addjob}
                style={{
                  color: "#FFFFFF",
                  backgroundColor: "#ED5353",
                  border: "1px solid #ED5353",
                  height: "6vh",
                  width: "9vw",
                  borderRadius: "6px",
                  fontSize: "15px",
                  marginLeft: "-12.8vw",
                  marginTop: "3vh",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                +Add Job
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        style={{
          height: "60vh",
          overflowX: "hidden",
          overflowY: "auto",
          marginTop: "5vh",
          marginBottom: "1vh",
        }}
      >
        {" "}
        {jobs.map((job, index) => (
          <Jobs
            job={job}
          />
        ))}
      </div>
      <div style={{ marginLeft: "1vw" }}>
        {error ? (
          <div
            style={{
              color: "red",
              marginTop: "0.5vh",
              fontSize: "20px",
              paddingBottom: "5vh",
            }}
          >
            <p>{error}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Searchbox;
