import React from "react";
const WorkExperience = () => {
  return (
    <div className="work-exp">
      <span>
        <h3 className="darkColor text-bold">Work Experience</h3>
        <div className="width">
          <span
            className="darkColor text-bold"
            style={{ marginLeft: "2%", fontSize: "large" }}
          >
            SurveyAuto
          </span>
          <span className="darkColor text-bold margin-left-auto">
            Nov 2020 - Present
          </span>
        </div>
        <div>
          <span className="darkColor" style={{ marginLeft: "2%" }}>
            Software Engineer
          </span>
        </div>
        <div>
          <ul className="darkColor" style={{ marginLeft: "2%" }}>
            <li>
              Develop platform for geospatial retail data analysis for FMCGs to
              monitor key performance metrics.{" "}
            </li>
            <li>
              Develop web applications for visiualizing data using different
              APIs of google maps and different type of charts.{" "}
            </li>
            <li>
              Frontend Development (
              ReactJs,TypeScript,Redux,ES6,Firebase,Google Map APIs).
            </li>
            <li>
              Backend Development (NodeJs,Express,Mongodb,JWT,Firebase
              Authentication).
            </li>
            <li>Data Prepration (JSON).</li>
            <li>
              Deployment of backend and frontend applications on Amazon EC2, S3
              and Heroku.
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
};
export default WorkExperience;
