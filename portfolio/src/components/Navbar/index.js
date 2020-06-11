import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar bg-dark">
    
    <span className="col-sm-4 d-flex justify-content-start list">
        <a 
        href="/" 
        className="list">portfolio </a>
        <a> / </a>
        <a 
        href="/" 
        className="list"> contact</a>
      </span>
    
    <div className="col-sm-4 d-flex justify-content-center">
        <a id="name">laura armstrong</a>
    </div>
    
    <span className="col-sm-4 d-flex justify-content-end btn">
        <a 
        //href="./images/Resume.pdf" 
        className="fa fa-file btn" 
        ></a>
        <a 
        //href="https://github.com/lauraearmstrong1" 
        className="fa fa-github btn" 
        ></a>
        <a 
        //href="https://www.linkedin.com/in/laura-armstrong-90bb0a86/" 
        className="fa fa-linkedin btn"
          ></a>
        <a 
        //href=" https://twitter.com/learmstrong1?lang=en" 
        className="fa fa-twitter btn" 
        ></a>
      </span>
  </nav>
  );
}

export default Navbar;
