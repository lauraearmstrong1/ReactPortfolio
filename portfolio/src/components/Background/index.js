import React from "react";
import "./style.css";
import img from "./brick.jpg"

function Background() {
  return (
      <img src={img} className="background" alt="brick"/>
  );
}

export default Background;
