import React from "react";
import "./style.css";
import Me from "./me.jpg"
import Spencer from "./Spencer.jpg"
import GrandCanyon from "./Grand-Canyon.JPG"
import Background from "../Background/brick.jpg"

const imageUrl = Background

function About() {

  return (
    <div>
        <div className="row" >
    <div className="col-sm-2"></div>
    <div className="col-sm-8 container px-3 pt-3 pb-3 about">
      <div className="row">
        <div className="col-sm-12">
          <div className="row d-flex justify-content-center pl-2 pr-2">
            <p className="bio">I am a full stack boot camp student at UNC-Charlotte. I have experience using html, CSS,
              JavaScript, JQuery, and Node.js. My undergraduate degree is in mechanical engineering and my master's
              degree in teaching. My dream job is one in which I can combine my love for development and tech with my
              teaching and coaching background. In my free time I love being outside running, biking, or hiking, or
              inside reading or lisening to music and podcasts. I also really enjoy spending time with friends, family,
              and my pup, Spencer.
            </p>
          </div>
        </div>
      </div>
      <div className="row">

        <div className="col-sm-4 d-flex justify-content-between">
        <img src={Me} className="pic" alt="Me"/>
        </div>
        <div className="col-sm-4 d-flex justify-content-between">
        <img src={GrandCanyon} className="pic" alt="Grand-Canyon"/>
        </div>
        <div className="col-sm-4 d-flex justify-content-between">
        <img src={Spencer} className="pic" alt="dog" />
        </div>
      </div>
    </div>
    <div className="col-sm-2"></div>
  </div>
    </div>
  );
}

export default About;