import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
	return (
		<div className="work-exp">
			<span>
				<h3 className="darkColor text-bold">Projects</h3>

				<div className="darkColor text-bold d-flex">
					<div style={{ marginLeft: "2%", fontSize: "large" }}>
						Revenue Growth Management (RGM)
						<a style={{ cursor: "pointer" }} className="mx-2" target="_blank" href="https://aisight.ai/rgm-aiq">
							<FontAwesomeIcon icon={faUpRightFromSquare} className="darkColor" />
						</a>
					</div>
				</div>

				<div>
					<span className="darkColor" style={{ marginLeft: "2%" }}>
						Description
					</span>
				</div>

				<div className="darkColor text-bold d-flex">
					<div style={{ marginLeft: "2%", fontSize: "large" }}>
						Route to Market (RTM)
						<a style={{ cursor: "pointer" }} className="mx-2" target="_blank" href="https://aisight.ai/rtm-aiq">
							<FontAwesomeIcon icon={faUpRightFromSquare} className="darkColor" />
						</a>
					</div>
				</div>

				<div>
					<span className="darkColor" style={{ marginLeft: "2%" }}>
						Description
					</span>
				</div>

				<div className="darkColor text-bold d-flex">
					<div style={{ marginLeft: "2%", fontSize: "large" }}>GEO Spatial Analysis of Flood in Pakistan</div>
				</div>

				<div>
					<span className="darkColor" style={{ marginLeft: "2%" }}>
						Description
					</span>
				</div>
			</span>
		</div>
	);
};

export default Projects;
