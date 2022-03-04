import React from "react";
// import Jumbotron from "react-bootstrap/Jumbotron ";

const JumbotronReact = () => {
	return (
		<div className="px-5 py-5 mb-2 bg-light rounded-2">
			<div className="container-fluid py-4">
				<h1 className="display-5 fw-bold">A warm Welcome!</h1>
				<p className="col-md-11 fs-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maxime mollitia, molestiae quas vel sint commodi repudiandae
					consequuntur voluptatum
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Call to action!
				</button>
			</div>
		</div>
	);
};

export default JumbotronReact;
