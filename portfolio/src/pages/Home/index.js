import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import AboutInfo from "../../components/AboutInfo";

const Home = () => {

  // const Portfolio = () => {
  //   const handlePortfolio = e => {
  //     e.preventDefault();
  //   }
  // }

  return (
    <div>
     <Navbar className="navbar bg-dark ">

     </Navbar>
       <AboutInfo>
     <Background></Background>
     </AboutInfo>
     
      
    </div>
  );
};

export default Home;
