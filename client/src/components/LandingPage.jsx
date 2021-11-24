import "./LandingPage.css";
import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <NavLink className="photo" to="/home">
        <img className="photo" src='https://key0.cc/images/preview/75043_b5edfb7cb4ea8f4efb90e5bca305aea9.png'/>
      </NavLink>
    </div>
  );
};

export default LandingPage;
