import React from "react";
import "./Characters.css";

const CharacterCard = props => (
  <div className="card">
    <a onClick={() => props.isClicked(props.name)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        <h3>{props.name}</h3>
      </div>
      {/* <div className="content">
      </div> */}
    </a>
  </div>
);

export default CharacterCard;
