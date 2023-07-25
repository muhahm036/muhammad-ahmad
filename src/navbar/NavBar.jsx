import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./index.css";

function NavBar(args) {
	return (
		<Navbar {...args} className="px-0">
			<Nav className="me-auto navbar-Items nav-border-shadow" navbar>
				<NavItem className="px-2 blue-background">
					<NavLink className="white-color nav-fonts px-2" href="/">
						About
					</NavLink>
				</NavItem>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
