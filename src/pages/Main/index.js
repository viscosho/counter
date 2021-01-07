import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainBody from './Layout/MainBody';
import { MainFooter } from './Layout/MainFooter';
import MainHeader from './Layout/MainHeader';

const Main = () => {
	return (
		<Container id="main" className="pt-3 pb-3">
			<Row id="main-row" className="d-flex flex-column align-content-stretch flex-wrap">
				<Col id="main-header" className="d-flex flex-column justify-content-center text-center">
					<MainHeader />
				</Col>
				<Col id="main-body">
					<MainBody />
				</Col>
				<Col id="main-footer" className="pb-3">
					<MainFooter />
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
