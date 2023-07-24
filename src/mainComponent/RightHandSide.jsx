import React from "react";
import { Row, Col } from "reactstrap";
import { Tag } from "antd";
const RightHandSide = () => {
	return (
		<div className="work-exp mob-view-list">
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
