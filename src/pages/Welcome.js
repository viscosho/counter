import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/img/icon.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Welcome = () => {
	return (
		<Container id="welcome">
			<Row>
				<Col className="d-flex flex-column justify-content-center text-center mb-3">
					<Image src={icon} alt="Counter" />
				</Col>
			</Row>
			<Row>
				<Col className="d-flex flex-column justify-content-center text-center mt-3 mb-3">
					<h2>Welcome to Counters</h2>
					<p>Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
				</Col>
			</Row>
			<Row>
				<Col className="text-center mt-3">
					<Link to="/counter" className="btn btn-primary">
						Get Started
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
