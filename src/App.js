import React from "react";
import LoginPage from "./components/LoginPage.js";
import RegisterPage from "./components/RegisterPage.js";
import Addjob from "./components/Addjob.js";
import Homepage from "./components/Homepage.js";
import Descriptionofjob from "./components/Descriptionofjob.js";
import Editjob from "./components/Editjob.js";
import Updatejob from "./components/Updatejob.js";
import Error from "./components/Error.js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/addingjob" element={<Addjob />}></Route>
        <Route path="/home" element={<Homepage />}></Route>

        <Route path="/home/:id/">
          <Route path="jobdescription" element={<Descriptionofjob />}></Route>
          <Route path="edit" element={<Editjob />}></Route>
        </Route>

        <Route path="/editjob/:id" element={<Updatejob/>}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
