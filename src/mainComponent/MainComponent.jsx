import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

import "./index.css";
import MainHeading from "./MainHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

class MainComponent extends Component {
  state = {};
  render() {
    return (
      <Container fluid className="containerr">
        <Row>
          <MainHeading />
        </Row>
        <Row>
          <span style={{ marginTop: "2%" }}></span>
          <Col>
            <Row>
              <WorkExperience />
            </Row>
            <Row>
              <Education />
            </Row>
          </Col>
          <Col lg="3" sm="3" md="3" xl="3"></Col>
        </Row>
      </Container>
    );
  }
}

export default MainComponent;
