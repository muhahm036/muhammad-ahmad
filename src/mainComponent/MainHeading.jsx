import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn } from "react-icons/fa";

const MainHeading = () => {
  return (
    <div className="border-bottom-fRow display-flexx margin-oneTP">
      <Col lg="5">
        <span>
          <h1 className="muhammad-ahmad">Muhammad Ahmad</h1>
          <h4 className="soft-eng">Software Engineer</h4>
        </span>
      </Col>
      <Col lg="7">
        <span>
          <h4 className="soft-eng">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "2%" }}
            />
            <span> Military Accounts College Road Lahore Pakistan</span>
          </h4>
        </span>
        <span>
          <h4 className="soft-eng">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "2%" }} />
            <span>0092&nbsp;3324674645</span>
          </h4>
        </span>
        <span>
          <h4 className="soft-eng">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "2%" }} />
            <span>muhahm036@gmail.com</span>
          </h4>
        </span>
        <span>
          <h4 className="soft-eng">
            <FaLinkedinIn style={{ marginRight: "2%" }} />
            {/* <a href="https://pk.linkedin.com/in/muhammad-ahmad-406431190">
              https://pk.linkedin.com/in/muhammad-ahmad-406431190
            </a> */}
            <span>https://pk.linkedin.com/in/muhammad-ahmad-406431190</span>
          </h4>
        </span>
      </Col>
    </div>
  );
};

export default MainHeading;
