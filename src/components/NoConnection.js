import React from 'react';
import { Button } from 'react-bootstrap';

const NoConnection = () => {
	return (
		<div className="d-flex flex-column justify-content-center align-content-center flex-wrap h-100">
			<h2 className="text-center">Couldn’t load the counters</h2>
			<p className="text-center">The Internet connection appears to be offline.</p>
			<Button variant="light">Retry</Button>
		</div>
	);
};

export default NoConnection;
