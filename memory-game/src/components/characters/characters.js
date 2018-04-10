import React from "react";
import "./characters.css";

const CharacterCard = () => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <h3>
        {props.name}
      </h3>
    </div>
  </div>
);

export default CharacterCard;
