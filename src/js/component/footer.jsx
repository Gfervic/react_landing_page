import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Container, Nav } from "react-bootstrap";

//include images into your bundle

//create your first component
const FooterReact = () => {
	return (
		<Navbar bg="dark" variant="dark" fixed="bottom">
			<Container>
				<Navbar.Collapse className="justify-content-center">
					<Navbar.Text>Copyright © your website 2022</Navbar.Text>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default FooterReact;
