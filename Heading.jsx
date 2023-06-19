import React from "react";
import "./Heading.css";

function Heading(props) {
  return <h1 style={props.style}>{props.content}</h1>;
}

export default Heading;
