import React from "react";
import { Row, Col } from "reactstrap";
import { Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedinIn } from "react-icons/fa";
const RightHandSide = () => {
	return (
		<div className="work-exp mob-view-list">
			<div>
				<h3 className="darkColor text-bold">Information</h3>
				<div class="d-flex flex-column">
					<span>
						<h4 className="soft-eng center">
							<FontAwesomeIcon icon={faLocationDot} style={{ marginRight: "3%" }} />
							<span> Military Accounts Society, College Road, Lahore Pakistan</span>
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
				</div>
			</div>
			<div>
				<h3 className="darkColor text-bold ">Skills</h3>
				<Row>
					<Col lg="6" sm="6" md="6" xl="6">
						<div class="d-flex flex-column">
							{["JavaScript", "TypeScript", "NodeJs", "ExpressJs", "NestJs", "JSX", "MongoDB", "AWS(S3)", "AWS(EC2)"].map(
								(elem, ind) => {
									return (
										<Tag color="#9683ec" className="m-1 d-flex justify-content-center" ind={`tags_first_${ind}`}>
											{elem}
										</Tag>
									);
								}
							)}
						</div>
					</Col>
					<Col lg="6" sm="6" md="6" xl="6">
						<div class="d-flex flex-column">
							{["ReactJs", "ReactTs", "CSS", "Firebase", "JWT", "Git"].map((elem, ind) => {
								return (
									<Tag color="#9683ec" className="m-1 d-flex justify-content-center" ind={`tags_second_${ind}`}>
										{elem}
									</Tag>
								);
							})}
						</div>
					</Col>
				</Row>
			</div>
			<div>
				<h3 className="darkColor text-bold">Language</h3>
				<div class="d-flex flex-column">
					{["English", "Urdu"].map((elem, ind) => {
						return (
							<Tag color="#9683ec" className="m-1 d-flex justify-content-center" ind={`tags_third_${ind}`}>
								{elem}
							</Tag>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RightHandSide;
