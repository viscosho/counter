import React from 'react';
import { useDispatch } from 'react-redux';
import fetchCount from '../actions/fetchCountersActions';
import { Button, Col, Row } from 'react-bootstrap';

const NoConnection = () => {
	const dispatch = useDispatch();

	const onRetry = () => {
		dispatch(fetchCount());
	};

	return (
		<div className="no-connection p-3 d-flex flex-column justify-content-center align-content-center flex-wrap">
			<h2 className="text-center">Couldn’t load the counters</h2>
			<p className="text-center">The Internet connection appears to be offline.</p>
			<Row>
				<Col md={{ span: 4, offset: 4 }} className="d-flex flex-column justify-content-center align-content-center">
					<Button variant="light" onClick={() => onRetry()}>
						Retry
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default NoConnection;
