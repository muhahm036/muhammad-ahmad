import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";

import "./index.css";
import MainHeading from "./MainHeading";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import RightHandSide from "./RightHandSide";
import Summary from "./Summary";
import Projects from "./Projects";

class MainComponent extends Component {
	state = {};
	render() {
		return (
			<Container fluid className="containerr container-border">
				<Row className="m-0 py-3 border-bottom-fRow">
					<MainHeading />
				</Row>

				<Row className="m-0 py-3">
					<Col className="vl" xl="9" lg="9" md="12" sm="12">
						<div class="d-flex flex-column">
							<div>
								<Summary />
							</div>
							<div>
								<WorkExperience />
							</div>
							<div>
								<Projects />
							</div>
							<div>
								<Education />
							</div>
						</div>
					</Col>
					<Col xl="3" lg="9" md="12" sm="12">
						<RightHandSide />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default MainComponent;
