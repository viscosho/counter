import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/img/icon.svg';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Welcome = () => {
	return (
		<Container id='welcome'>
			<Row>
				<Col className='d-flex flex-column justify-content-center text-center'>
					<Image src={icon} alt='Counter' />
					<h2>Welcome to Counters</h2>
					<p>Capture cups of lattes, frapuccinos, or anything else that can be counted.</p>
				</Col>
			</Row>
			<Row>
				<Col className='text-center'>
					<Link to='/counter' className='btn btn-primary'>
						Get Started
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
