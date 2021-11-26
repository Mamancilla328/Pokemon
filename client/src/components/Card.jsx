import "./Card.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ sprite, name, id, types }) => {
  return (
 

    <div className="card">
      <div className="shadow">
        <div className="img">
          <img src={sprite} alt={name} />
        </div>
        <div className="info">
          <NavLink to={`/Detail/${id}`} className="font">
            {name}
          </NavLink>
          <p className="font">{types.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
