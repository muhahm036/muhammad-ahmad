import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { ahmadImage } from "../assets/images";
//"border-bottom-fRow display-flexx margin-oneTP"
const MainHeading = () => {
	return (
		<>
			<Col className="mb-4  d-flex justify-content-center align-items-center" xl="4" lg="6" md="6" sm="6">
				<span className="justify-content-center align-items-center">
					<h1 className="muhammad-ahmad">Muhammad Ahmad</h1>
					<h4 className="soft-eng">Software Engineer</h4>
				</span>
			</Col>
			<Col className="mb-4 d-flex justify-content-center align-items-center" xl="2" lg="6" md="6" sm="6">
				<span>
					<img
						src={ahmadImage}
						alt="ahmad_image"
						style={{
							border: "3px solid #9683ec",
							borderRadius: "50%",
						}}
						width="160"
						height="160"
					/>
				</span>
			</Col>
			<Col xl="6" lg="12" md="12" sm="12">
				<span>
					<h4 className="soft-eng center">
						<FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "3%" }} />
						<span> Military Accounts College Road Lahore Pakistan</span>
					</h4>
				</span>
				<span>
					<h4 className="soft-eng center">
						<FontAwesomeIcon icon={faPhone} style={{ marginRight: "2%" }} />
						<span>0092&nbsp;3324674645</span>
					</h4>
				</span>
				<span>
					<h4 className="soft-eng center">
						<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "2%" }} />
						<span>muhahm036@gmail.com</span>
					</h4>
				</span>
				<span>
					<h4 className="soft-eng  linkedin">
						<FaLinkedinIn style={{ marginRight: "2%", marginBottom: "6px" }} />
						{/* <a href="https://pk.linkedin.com/in/muhammad-ahmad-406431190">
              https://pk.linkedin.com/in/muhammad-ahmad-406431190
            </a> */}
						<span
							style={{ cursor: "pointer" }}
							onClick={() => {
								window.open("https://pk.linkedin.com/in/muhammad-ahmad-406431190", "_blank");
							}}
						>
							https://pk.linkedin.com/in/muhammad-ahmad-406431190
						</span>
					</h4>
				</span>
			</Col>
		</>
	);
};

export default MainHeading;
