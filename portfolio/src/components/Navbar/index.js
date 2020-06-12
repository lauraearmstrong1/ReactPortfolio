import React from "react";
import "./style.css";
//import Resume from "./Resume/Resume.pdf"

// links={
//   resume: Resume,
//   twitterUrl: url("https://github.com/lauraearmstrong1"),
//   linkedInUrl: url("https://www.linkedin.com/in/laura-armstrong-90bb0a86/"),
//   githubUrl: url("https://github.com/lauraearmstrong1")
// };


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
        //href={links.resume}
        className="fa fa-file btn" 
        ></a>
        <a 
        //href={links.githubUrl}
        className="fa fa-github btn" 
        ></a>
        <a 
        //href={links.linkedInUrl}
        className="fa fa-linkedin btn"
          ></a>
        <a 
        //href={links.twitterUrl} 
        className="fa fa-twitter btn" 
        ></a>
      </span>
  </nav>
  );
}

export default Navbar;
