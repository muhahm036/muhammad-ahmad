import React, { Component, Fragment } from "react";
import NavBar from "./navbar/NavBar";
class CustomRouterComp extends Component {
	render() {
		const { component: Comp } = this.props;
		return (
			<div className="container-fluid m-0 p-0">
				<Fragment>
					<header className="navbar_fixed">
						<NavBar />
					</header>
					<div className="app-main">
						<Comp />
					</div>
				</Fragment>
			</div>
		);
	}
}

export default CustomRouterComp;
