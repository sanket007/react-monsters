import React from "react";

export const Card = props => (
  <div>
    <img src={`https://robohash.org/${props.id}`} alt="monster" />
    <h2 key={props.id}>{props.name}</h2>
  </div>
);
