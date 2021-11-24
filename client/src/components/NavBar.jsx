import "./NavBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search.jsx";
import Filters from "./Filters";
import { IoIosAddCircle, IoIosHome } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="Container">
      <a href="/home" className="homeAdd">
        <IoIosHome />
      </a>
      <Search />
      <div className="extra">
        <Filters className="order" />
        <NavLink to="/home/create" className="homeAdd">
          <IoIosAddCircle />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
