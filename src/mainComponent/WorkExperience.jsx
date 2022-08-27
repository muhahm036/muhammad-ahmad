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
            Nov-2020 - Present
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
              Frontend Development (
              ReactJs,TypeScript,Redux,ES6,Firebase,Google Map APIs).
            </li>
            <li>Data Prepration (JSON).</li>
            <li>Deployments and Files management (AWS S3).</li>
          </ul>
        </div>
      </span>
    </div>
  );
};
export default WorkExperience;
