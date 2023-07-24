import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

import "./index.css";
import MainHeading from "./MainHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import RightHandSide from "./RightHandSide";
import Summary from "./Summary";

class MainComponent extends Component {
	state = {};
	render() {
		return (
			<Container fluid className="containerr container-border">
				<Row className="m-0 py-3 border-bottom-fRow">
					<MainHeading />
				</Row>
				{/* <hr className="border-bottom-fRow" /> */}
				{/* <Row className="m-0 ">
        </Row> */}
				<Row className="m-0 py-3">
					<Col className="vl" xl="9" lg="12" md="12" sm="12">
						<Summary />
						<WorkExperience />
						<Education />
						{/* <div className=""></div> */}
					</Col>
					<Col xl="3" lg="12" md="12" sm="12">
						<RightHandSide />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MainComponent;
