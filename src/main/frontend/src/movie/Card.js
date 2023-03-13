import React from "react";
import './Card.css';

const Card = (props) => {
  
  return (
      <div className="card">
        <h3 className="title">{props.title}</h3>
        <p className="year">Year: {props.year}</p>
        <p className="director">Director: {props.director}</p>
    </div>
  );
};

export default Card;
