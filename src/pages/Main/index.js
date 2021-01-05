import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainBody from './Layout/MainBody';
import { MainFooter } from './Layout/MainFooter';
import MainHeader from './Layout/MainHeader';

const Main = () => {
	return (
		<Container id="main">
			<Row className="d-flex flex-column">
				<Col className="d-flex flex-column justify-content-center text-center">
					<MainHeader />
				</Col>
				<Col>
					<MainBody />
				</Col>
				<Col id="main-footer">
					<MainFooter />
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
