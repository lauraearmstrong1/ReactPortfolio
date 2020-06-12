import React, { useState } from "react";
import song from '../../Images/Project.JPG'
import Project from '../../components/Projects'

const Portfolio = () => {
  const projectList = [
    {
      name: "Find My Song",
      image: song,
      deployed: "https://koolachoo.github.io/First-Project/",
      repo: "https://github.com/Koolachoo/First-Project"
    },
    {
      name: "Find My Song",
      image: song,
      deployed: "https://koolachoo.github.io/First-Project/",
      repo: "https://github.com/Koolachoo/First-Project"

    }
    
  ]

return (
  <div>
    <div className="container-fluid">
      <div className="row">
        {projectList.map(proj => <Project details={proj} />)}
      </div>
    </div>
  </div>
);
};

export default Portfolio;



