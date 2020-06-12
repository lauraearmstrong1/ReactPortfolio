import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import { Input, TextArea, FormBtn } from "../components/Form";

const Contact = () => {

  // const Portfolio = () => {
  //   const handlePortfolio = e => {
  //     e.preventDefault();
  //   }
  // }

  return (
    <div>
      <Navbar className="navbar bg-dark ">

      </Navbar>

      <Background></Background>


      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={() => { }}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={() => { }}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={() => { }}
              name="synopsis"
              placeholder="Synopsis (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={() => { }}
            >
              Submit Book
              </FormBtn>
          </form>
        </Col>
      </Row>






    </div>
  );
};

export default Contact;
