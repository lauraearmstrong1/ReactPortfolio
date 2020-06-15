import React, { useState } from "react";
import song from '../../Images/Project.JPG'
import weather from '../../Images/WeatherDashboard.PNG'
import burger from '../../Images/Burger.JPG'
import planner from '../../Images/DailyPlanner.JPG'
import nerd from '../../Images/NerdBook.JPG'
import notes from '../../Images/NoteTaker.JPG'
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
      name: "Weather Dashboard",
      image: weather,
      deployed: "https://lauraearmstrong1.github.io/Weather-Dashboard/",
      repo: "https://github.com/lauraearmstrong1/Weather-Dashboard"

    },
    {
      name: "Burger",
      image: burger,
      deployed: "https://github.com/lauraearmstrong1/Burger",
      repo: "https://github.com/lauraearmstrong1/Burger"
    },
    {
      name: "Daily Planner",
      image: planner,
      deployed: "https://lauraearmstrong1.github.io/DailyPlanner/",
      repo: "https://github.com/lauraearmstrong1/DailyPlanner"
    },
    {
      name: "Note Taker",
      image: notes,
      deployed: "https://github.com/lauraearmstrong1/Note-Taker",
      repo: "https://github.com/lauraearmstrong1/Note-Taker"
    },
    {
      name: "Nerd Book",
      image: nerd,
      deployed: "https://blooming-meadow-40922.herokuapp.com/home.html",
      repo: "https://github.com/apatel922/Project2"
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



