import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ image, name, id, types }) => {
  return (
    <div className="card">
      <div className="shadow">
        <div className="img">
          <img src={image} alt={name} />
        </div>
        <div className="info">
          <NavLink to={`/Detail/${id}`} className="font">
            {name}
          </NavLink>
          <p className="font">{types}</p>
          {/* <p>{score}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
