import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import { Navbar, Container, Nav } from "react-bootstrap";

//include images into your bundle

//create your first component
const NavbarReact = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse
					id="responsive-navbar-nav"
					className="justify-content-end">
					<Nav>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#services">Services</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarReact;
