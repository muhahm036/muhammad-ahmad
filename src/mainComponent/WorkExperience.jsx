import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
const WorkExperience = () => {
	return (
		<div className="work-exp">
			<h3 className="darkColor text-bold">Work Experience</h3>
			<div className="darkColor text-bold d-flex">
				<div style={{ marginLeft: "2%", fontSize: "large" }}>
					<span>
						aiSight.ai (formaly SurveyAuto)
						<a style={{ cursor: "pointer" }} className="mx-2" target="_blank" href="https://aisight.ai/">
							<FontAwesomeIcon icon={faUpRightFromSquare} className="darkColor" />
						</a>
					</span>
				</div>
				<div className="margin-left-auto">Nov 2020 - Present</div>
			</div>
			<div>
				<span className="darkColor" style={{ marginLeft: "2%" }}>
					Software Engineer
				</span>
			</div>
			<div>
				<ul className="darkColor" style={{ marginLeft: "2%" }}>
					<li>Develop platform for geospatial retail data analysis for FMCGs to monitor key performance metrics. </li>
					<li>
						Develop web applications for visiualizing data using different APIs of google maps and different type of charts.{" "}
					</li>
					<li>Frontend Development ( ReactJs,TypeScript,Redux,ES6,Firebase,Google Map APIs).</li>
					<li>Backend Development (NodeJs,NestJs,Express,Mongodb,JWT,Firebase Authentication,FireStore).</li>
					<li>Data Prepration and Reports (JSON,XLSX,CSV).</li>
					<li>Deployment of backend and frontend applications on Amazon EC2, S3 and Heroku.</li>
				</ul>
			</div>
		</div>
	);
};
export default WorkExperience;
