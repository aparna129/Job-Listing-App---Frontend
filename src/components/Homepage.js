import React, { useState, useEffect } from "react";
import Header from "./Header";
import Searchbox from "./Searchbox";
import Header2 from "./Header2";
import { jwtDecode } from "jwt-decode";

function Homepage() {
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

  return (
    <div style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
      <div>
        <div>{isLoggedIn ? <Header2 /> : <Header />}</div>
        <Searchbox />
      </div>
    </div>
  );
}

export default Homepage;
