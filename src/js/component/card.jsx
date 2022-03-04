import React from "react";

import {
	Row,
	Col,
	Card,
	Button,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";

//create your first component
const CardReact = () => {
	return (
		<Row xs={1} sm={2} lg={4} className="g-4">
			{Array.from({ length: 4 }).map((_, idx) => (
				<Col>
					<Card
						className="text-center w-100"
						style={{ width: "18rem" }}>
						<Card.Img src="holder.js/300x200" variant="top" />
						<Card.Body className="py-4">
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush py-2">
							<ListGroupItem>
								<Button variant="primary">Go somewhere</Button>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default CardReact;
