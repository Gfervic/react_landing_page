import React from "react";
import NavbarReact from "./navbar.jsx";
import JumbotronReact from "./jumbotron.jsx";
import CardReact from "./card.jsx";
import FooterReact from "./footer.jsx";

import { Container } from "react-bootstrap";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<NavbarReact />
			<Container>
				<JumbotronReact />
				<CardReact />
			</Container>
			<FooterReact />
		</div>
	);
};

export default Home;
