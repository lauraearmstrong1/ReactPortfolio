import React from "react";
import "./style.css";
import {Link, useLocation} from 'react-router-dom'
import Resume from "../Resume/Resume.pdf"

function Navbar() {
  let location = useLocation().pathname
  console.log(location)
  return (
    <nav className="navbar bg-dark">
    
    <span className="col-sm-4 d-flex justify-content-start list">
        {location !== "/" && (<Link to="/" className="list btn">Home  </Link> )}
        {location !== "/portfolio" && (<Link to="/portfolio" className="list btn">Portfolio  </Link>)}
        {location !== "/contact" && (<Link to="/contact" className="list btn">Contact</Link>)}
      </span>
    
    <div className="col-sm-4 d-flex justify-content-center">
        <a id="name">laura armstrong</a>
    </div>
    
    <span className="col-sm-4 d-flex justify-content-end btn">
        <a 
        href={Resume}
        target="blank"
        ><i className="fa fa-file btn"></i>
      </a>
        <a 
        href="https://github.com/lauraearmstrong1"
        target="blank"
        ><i className="fa fa-github btn"></i></a>
        <a 
        href="https://www.linkedin.com/in/laura-armstrong-90bb0a86/"
        target="blank"
          ><i className="fa fa-linkedin btn"></i></a>
        <a 
        href="https://github.com/lauraearmstrong1 "
        target="blank"
        ><i className="fa fa-twitter btn"></i></a>
      </span>
  </nav>
  );
}

export default Navbar;
