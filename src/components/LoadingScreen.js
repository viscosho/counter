import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const LoadingScreen = () => {
	return (
		<Container className="loading d-flex flex-column justify-content-center align-items-center">
			<Row>
				<Col className="loading-spinner d-flex flex-column justify-content-center align-items-center">
					<Spinner className="d-flex flex-column justify-content-center align-items-center" animation="grow" variant="primary" role="status">
						<Spinner className="d-flex flex-column justify-content-center align-items-center" animation="grow" variant="primary" role="status">
							<Spinner
								className="d-flex flex-column justify-content-center align-items-center"
								animation="grow"
								variant="primary"
								role="status"
								size="sm"
							>
								<span className="sr-only">Loading...</span>
							</Spinner>
						</Spinner>
					</Spinner>
				</Col>
			</Row>
		</Container>
	);
};

export default LoadingScreen;
